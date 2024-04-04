'use client'

import { useRecoilValue } from "recoil";
import { ButtonStyle } from "./style.css";
import { ImageType, formSelector, imageMapSelector } from "../../recoil";
import { usePresignedUrl } from "@/app/query/usePresignedUrl";
import { useUploadImageToS3 } from "@/app/query/useUploadImageToS3";
import { useEffect } from "react";

type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {

    const formState: any = useRecoilValue(formSelector)
    const imageMap = useRecoilValue(imageMapSelector)

    const {mutateAsync: getPresignedUrl, data: presignedData, isSuccess, isError: isPresignedUrlError} = usePresignedUrl()
    const {mutateAsync: uploadImageToS3, isError: isUplaodError} = useUploadImageToS3()


    const onClick = async () => {
        try{

            // TODO 모든 폼 검증

            /*
            presignedUrl 요청을 위한 정보
            {
                images: [
                    { filename: "image.jpg", filesize: 3242}
                ]
            }
            */
            const presignedUrlBody = [...formState.image.map((item: ImageType)=>({
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

            alert("모든 이미지 등록 완료")

            /*
            TODO 이미지 등록

            TODO 등록된 이미지 url

            TODO 다른 폼들 등록
            */

        }catch(e){
            console.log(e)
        }

    }

    return (
        <>
            {/* 엔터 시 제출되는거 방지하기위해 div로 함 */}
            <div style={style} className={ButtonStyle} onClick={onClick}>추가 하기</div>
            {/* { isPresignedUrlError || isUplaodError ? <div>에러남</div> : <div>에러 안남</div>} */}
        </>

    )
}

export default SubmitButton

