'use client'

import { useRecoilValue } from "recoil";
import { ButtonMessageStyle, ButtonWrapperStyle, vibrate } from "./style.css";
import { formSelector, imageMapSelector } from "../../recoil";
import { usePresignedUrl } from "@/app/_common/query/post/usePresignedUrl";
import { useUploadImageToS3 } from "@/app/_common/query/post/useUploadImageToS3";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmButton from "@/app/_common/component/ConfirmButton";
import toast from "react-hot-toast/headless";
import { PutATDTO, useUpdateAT } from "@/app/_common/query/put/useUpdateAT";
// import { atUrlSelector } from "@/app/[[...map]]/recoil";



type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {

    const session = useSession();
    const router = useRouter();
    const queryClient = useQueryClient()
    const formState = useRecoilValue(formSelector)
    // const atQueryCache = useRecoilValue(atUrlSelector)
    const [loading, setLoading] = useState(false)
    const [isDisabled, setDisable] = useState(true)
    const imageMap = useRecoilValue(imageMapSelector)
    const [errorState, setErrorState] = useState({
        isError: false,
        message: ""
    })

    const {mutateAsync: getPresignedUrl, data: presignedData, isSuccess, isError: isPresignedUrlError} = usePresignedUrl()
    const {mutateAsync: uploadImageToS3, isError: isUplaodError, error: uploadError, isPending: isUploadImagePending} = useUploadImageToS3()
    const { mutateAsync: updateAT, isPending: isUpdateATLoading } = useUpdateAT();

    useEffect(()=>{
        if(loading || isUploadImagePending || isUpdateATLoading || formState.image.length == 0 || formState.category.length == 0 || formState.address.name == "" || formState.detail.length == 0 || !formState.map.id){
            setDisable(true)
        }else setDisable(false)
    }, [loading, isUploadImagePending, isUpdateATLoading, formState.image, formState.category, formState.address.name, formState.detail, formState.map.id])

    const onClick = async () => {
        try{
            setErrorState({isError: false, message: ""})

            if(formState.image.length == 0 || formState.category.length == 0 || formState.address.name == "" || formState.detail.length == 0 || !formState.map.id){
                setErrorState({isError: true, message: "폼을 모두 입력해주세요"})
                return;
            }

            setLoading(true)

            /*
            presignedUrl 요청을 위한 정보 (새로 등록한 이미지만, isNew로 판별)
            {
                images: [
                    { filename: "image.jpg", filesize: 3242}
                ]
            }
            */
            const presignedUrlBody = [...formState.image.filter((item)=>item.isNew).map((item)=>({
                filename: `${item.name}.${item.ext}`,
                filesize: item.size
            }))]

            // 새로 등록한 이미지가 있으면 s3에 등록
            if(presignedUrlBody.length){
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
            }
            

            const putBody:PutATDTO = {
                id: formState.id,
                imagesUrl: formState.image.map((image)=>(`https://s3.a-spot-thur.app/user/${session.data?.user.id}/${image.name}.${image.ext}`)),
                category: [...formState.category],
                name: formState.address.name,
                address: formState.address.address,
                detail: formState.detail,
                mapId: formState.map.id as string,
                deletedImage: formState.deletedImage
            }

            await updateAT(putBody)

            // 캐시 초기화
            queryClient.invalidateQueries({ queryKey: ['/at', formState.id],  refetchType: 'all' })
            queryClient.invalidateQueries({ queryKey: ['/at/list'],  refetchType: 'all' })


            toast("수정 완료")

            router.back()

        }catch(e: any){
            setLoading(false)
            toast.error(e.message)

            setErrorState({isError: true, message: e.message})
        }finally{
            setLoading(false)
        }

    }

    return (
            <div style={style} className={ButtonWrapperStyle}> 
                <ConfirmButton loading={loading} onClick={onClick} disabled={isDisabled} text="수정하기" style={{height: "50px", fontSize: "18px", marginTop: "8px" }}/>
                { errorState.isError ? <div className={ButtonMessageStyle} style={assignInlineVars({animation: `${vibrate} .3s`})}>{errorState.message}</div> : <></>}
            </div>
            

    )
}

export default SubmitButton

