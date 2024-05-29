"use client";

import { useValidId } from "@/app/_common/query/get/useValidateId";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import Input from "../Input";
import {
  FormStyle,
  LogoutDescriptionStyle,
  LogoutLayoutStyle,
  LogoutStyle,
} from "./style.css";
import { useMutateUserInfo } from "@/app/_common/query/put/useMutateUserInfo";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ConfirmButton from "@/app/_common/component/ConfirmButton";
import { useQueryClient } from "@tanstack/react-query";

const Form = () => {
  const router = useRouter();
  const queryClient = useQueryClient()

  const { update, data } = useSession();
  const [inputName, setInputName] = useDebounceValue("", 600);
  const {
    refetch: getIsValidId,
    isLoading: isValidIdLoading,
    data: isValidId,
    error: validIdError,
    isError: isValidIdError,
  } = useValidId({
    at_id: encodeURIComponent(inputName)
  }, {
    // query string 이스케이프 문자
    enabled: false,
  });

  const { mutate: updateUserInfo, isPending: isUpdateUserInfoLoading } =
    useMutateUserInfo();

  useEffect(() => {
    if (inputName.length > 0) getIsValidId();
  }, [inputName]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    updateUserInfo(
      { at_id: inputName }, // 수정할 닉
      {
        onSuccess: async (res) => {
          // 성공시 서버에 세션 업데이트 (AT_ID 추가)
          await update({ at_id: res.data.at_id, id: res.data.id });
          await queryClient.invalidateQueries({ queryKey: ['/at/list'],  refetchType: 'all' })
          await queryClient.invalidateQueries({ queryKey: ['/at'], refetchType: 'all'  })
          await queryClient.invalidateQueries({ queryKey: ['/at/count'], refetchType: 'all'  })
          await queryClient.invalidateQueries({ queryKey: ['/map/aggregate'], refetchType: 'all'  })

          // 홈화면 이동
          router.push("/profile");
          router.refresh()
        },
        onError(error, variables, context) {
          alert(`알수없는 오류 ${error}`);
          router.push("/profile");
        },
      }
    );
  };

  return (
    <>
      <form className={FormStyle}>
        <Input
          placeholder="사용자 닉네임"
          onChange={(e: any) => setInputName(e.target.value)}
          isError={isValidIdError as any}
          errorMessage={validIdError?.message || ""}
        />

        <ConfirmButton
          disabled={isValidIdError || inputName.length == 0}
          loading={isValidIdLoading || isUpdateUserInfoLoading}
          onClick={onSubmit}
          style={{maxWidth: "280px",  marginTop: "8px"}}
          text="완료"
        />
      </form>
      <div className={LogoutLayoutStyle} style={{ marginTop: "18px" }}>
        <span className={LogoutDescriptionStyle}>다음에 변경할래요 👉 </span>
        <button name={"next_time_button"} className={LogoutStyle} onClick={() => router.back()}>
          뒤로가기
        </button>
      </div>
    </>
  );
};

export default Form;
