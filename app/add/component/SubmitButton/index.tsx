'use client'

import { useRecoilValue } from "recoil";
import { ButtonMessageStyle, ButtonStyle, ButtonWrapperStyle, vibrate } from "./style.css";
import { formSelector, imageMapSelector } from "../../recoil";
import { usePresignedUrl } from "@/app/_common/query/usePresignedUrl";
import { useUploadImageToS3 } from "@/app/_common/query/useUploadImageToS3";
import { useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useUploadAT } from "@/app/_common/query/useUploadAT";
import { useSession } from "next-auth/react";
import { PostBody } from "@/app/api/at/route";
import { useRouter } from "next/navigation";

type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {

    const session = useSession();
    const router = useRouter();
    const formState = useRecoilValue(formSelector)
    const imageMap = useRecoilValue(imageMapSelector)
    const [errorState, setErrorState] = useState({
        isError: false,
        message: ""
    })

    const {mutateAsync: getPresignedUrl, data: presignedData, isSuccess, isError: isPresignedUrlError} = usePresignedUrl()
    const {mutateAsync: uploadImageToS3, isError: isUplaodError} = useUploadImageToS3()
    const {mutateAsync: uploadAT, data: uploadATResponse, isSuccess: isUploadATSuccess, isError: isUploadATError} = useUploadAT()



    const onClick = async () => {
        try{

            setErrorState({isError: false, message: ""})

            if(formState.image.length == 0 || formState.category.length == 0 || formState.address.name == "" || formState.detail.length == 0){
                setErrorState({isError: true, message: "폼을 모두 입력해주세요"})
                return;
            }

            alert("구현중입니다.")
            return;

            /*
            presignedUrl 요청을 위한 정보
            {
                images: [
                    { filename: "image.jpg", filesize: 3242}
                ]
            }
            */
            const presignedUrlBody = [...formState.image.map((item)=>({
                filename: `${item.name}.${item.ext}`,
                filesize: item.size
            }))]
            const { data }: any = await getPresignedUrl({images: presignedUrlBody})
    
            const presignedFileName = Object.keys(data)
            for(let i=0;i<presignedFileName.length;i++){
                const form = new FormData();
                const fields = data[presignedFileName[i]].fields // 인증에 필요한 필드
                const presignedUrl = data[presignedFileName[i]].url // presigned url
                const file = imageMap[presignedFileName[i]].data // 실제 파일
                const type = imageMap[presignedFileName[i]].type // 파일 타입
                
                Object.entries(fields).forEach(([field, value]: any) => {
                    form.append(field, value);
                });
                form.append('Content-Type', type)
                form.append('file', file);
                await uploadImageToS3({presignedUrl, form})
            }

            const postBody:PostBody = {
                imagesUrl: Object.keys(data).map((image: string)=>(`s3.a-spot-thur.app/user/${session.data?.user.id}/${image}`)),
                category: [...formState.category],
                name: formState.address.name,
                address: formState.address.address,
                detail: formState.detail,
                mapId: "default",
            }

            await uploadAT(postBody)

            alert("모든 이미지 등록 완료")

            router.push("/")

        }catch(e: any){
            console.log(e)
            setErrorState({isError: true, message: "서버 에러"})
        }

    }

    return (
            // 엔터 시 제출되는거 방지하기위해 div로 함 
            <div style={style} className={ButtonWrapperStyle}>
                {/* input이 하나만 있어도 제출됨 */}
                <input type="text" hidden />
                {/* TODO 버튼 로딩 상태 */}
                <div className={ButtonStyle} onClick={onClick}>추가 하기</div>
                { isPresignedUrlError || isUplaodError ? <div className={ButtonMessageStyle} style={assignInlineVars({animation: `${vibrate} .3s`})}>서버 에러</div> : <></>}
                { errorState.isError ? <div className={ButtonMessageStyle} style={assignInlineVars({animation: `${vibrate} .3s`})}>{errorState.message}</div> : <></>}
            </div>
            

    )
}

export default SubmitButton

