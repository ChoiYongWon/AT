"use client";

import { useValidId, useValidIdDTO } from "@/app/query/useValidateId";
import { useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { FormStyle } from "./style.css";
import { useMutateUserInfo } from "@/app/query/useMutateUserInfo";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Form = () => {
  const router = useRouter();
  const { update, data } = useSession();
  const [inputName, setInputName] = useDebounceValue("", 500);
  const {
    refetch: getIsValidId,
    isLoading: isValidIdLoading,
    data: isValidId,
    error: validIdError,
    isError: isValidIdError,
  } = useValidId(encodeURIComponent(inputName), { // query string 이스케이프 문자
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
          await update({ at_id: res.data.at_id });
          // 홈화면 이동
          router.push("/");
        },
        onError(error, variables, context) {
          alert(`알수없는 오류 ${error}`);
          router.push("/");
        },
      }
    );
  };

  return (
    <form className={FormStyle}>
      <Input
        placeholder="사용자 이름"
        onChange={(e: any) => setInputName(e.target.value)}
        isError={isValidIdError as any}
        errorMessage={validIdError?.response?.data?.message || ""}
      />

      <Button
        disabled={isValidIdError || inputName.length == 0}
        loading={isValidIdLoading || isUpdateUserInfoLoading}
        onClick={onSubmit}
      />
    </form>
  );
};

export default Form;
