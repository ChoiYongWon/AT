'use client'

import { useRecoilValue } from "recoil";
import { ButtonStyle } from "./style.css";
import { ImageType, formSelector, imageMapSelector, isCompressQueueEmptyState } from "../../recoil";
import { usePresignedUrl } from "@/app/query/usePresignedUrl";
import { useUploadImageToS3 } from "@/app/query/useUploadImageToS3";
import { useEffect } from "react";
import { CompressQueue } from "@/app/util/CompressQueue";

type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {

    const formState: any = useRecoilValue(formSelector)
    const imageMap = useRecoilValue(imageMapSelector)
    const isCompressQueueEmpty = useRecoilValue(isCompressQueueEmptyState)

    const {mutateAsync: getPresignedUrl, data: presignedData, isSuccess} = usePresignedUrl()
    const {mutateAsync: uploadImageToS3} = useUploadImageToS3()
    // const compressQueue = new CompressQueue()


    const onClick = async () => {
        console.log(formState)
        // presignedUrl 요청을 위한 정보
        // {
        //     images: [
        //         { filename: "image.jpg", filesize: 3242}
        //     ]
        // }
        const images = [...formState.image.map((item: ImageType)=>({
            filename: `${item.name}.${item.ext}`,
            filesize: item.size
        }))]
        const res: any = await getPresignedUrl({images}) // TODO 예외처리

        // if(res){
        //     const data = res.data
        //     const presignedFileName = Object.keys(data)
        //     for(let i=0;i<presignedFileName.length;i++){
        //         const form = new FormData();
        //         const fields = data[presignedFileName[i]].fields // 인증에 필요한 필드
        //         const presignedUrl = data[presignedFileName[i]].url // presigned url
        //         const file = imageMap[presignedFileName[i]].data // 실제 파일
        //         const type = imageMap[presignedFileName[i]].type // 파일 타입
                
        //         Object.entries(fields).forEach(([field, value]: any) => {
        //             form.append(field, value);
        //         });
                
        //         form.append('Content-Type', type)
        //         form.append('file', file);

        //         const upload = await uploadImageToS3({presignedUrl, form})
        //         console.log(upload)
        //     }
        // }
    }

    return (
        <>
            <div style={style} className={ButtonStyle} onClick={onClick}>추가 하기</div>
            <div>압축 큐 비었나 ? {isCompressQueueEmpty.toString()}</div>
        </>
        // 엔터 시 제출되는거 방지하기위해 div로 함

    )
}

export default SubmitButton

