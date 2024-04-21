'use client'

import { useRecoilValue } from "recoil";
import { ButtonMessageStyle, ButtonStyle, ButtonWrapperStyle, LoadingLottieStyle, vibrate } from "./style.css";
import { formSelector, imageMapSelector } from "../../recoil";
import { usePresignedUrl } from "@/app/_common/query/post/usePresignedUrl";
import { useUploadImageToS3 } from "@/app/_common/query/post/useUploadImageToS3";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useUploadAT } from "@/app/_common/query/post/useUploadAT";
import { useSession } from "next-auth/react";
import { PostBody } from "@/app/api/at/route";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Lottie from 'lottie-react'
import loadingJson from '../../../../public/assets/loading.json'



type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {

    const session = useSession();
    const router = useRouter();
    const formState = useRecoilValue(formSelector)
    const [loading, setLoading] = useState(false)
    const [isDisabled, setDisable] = useState(true)
    const imageMap = useRecoilValue(imageMapSelector)
    const [errorState, setErrorState] = useState({
        isError: false,
        message: ""
    })

    const {mutateAsync: getPresignedUrl, data: presignedData, isSuccess, isError: isPresignedUrlError} = usePresignedUrl()
    const {mutateAsync: uploadImageToS3, isError: isUplaodError, isPending: isUploadImagePending} = useUploadImageToS3()
    const {mutateAsync: uploadAT, data: uploadATResponse, isPending: isUploadATPending, isError: isUploadATError} = useUploadAT()

    useEffect(()=>{
        if(loading || isUploadImagePending || isUploadATPending || formState.image.length == 0 || formState.category.length == 0 || formState.address.name == "" || formState.detail.length == 0 || !formState.map.id){
            setDisable(true)
        }else setDisable(false)
    }, [loading, isUploadImagePending, isUploadATPending, formState.image, formState.category, formState.address.name, formState.detail, formState.map.id])

    const onClick = async () => {
        try{
            setErrorState({isError: false, message: ""})

            if(formState.image.length == 0 || formState.category.length == 0 || formState.address.name == "" || formState.detail.length == 0 || !formState.map.id){
                setErrorState({isError: true, message: "폼을 모두 입력해주세요"})
                return;
            }

            setLoading(true)

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
                mapId: formState.map.id as string,
            }

            await uploadAT(postBody)

            alert("등록 완료")

            router.push("/")

        }catch(e: any){
            console.log(e)
            setLoading(false)
            setErrorState({isError: true, message: "서버 에러"})
        }finally{
            setLoading(false)
        }

    }

    return (
            <div style={style} className={ButtonWrapperStyle}> 
                <motion.button className={ButtonStyle} onClick={onClick} disabled={isDisabled} {...(!isDisabled ? { whileTap: { scale: 0.9, transition: { duration: 0.08 } } } : {})}>
                    
                    {(loading) ? (
                    <Lottie
                        animationData={loadingJson}
                        loop={true}
                        className={LoadingLottieStyle}
                    />
                    ) : ( "추가 하기" )}         
                </motion.button>
                
                { isPresignedUrlError || isUplaodError ? <div className={ButtonMessageStyle} style={assignInlineVars({animation: `${vibrate} .3s`})}>서버 에러</div> : <></>}
                { errorState.isError ? <div className={ButtonMessageStyle} style={assignInlineVars({animation: `${vibrate} .3s`})}>{errorState.message}</div> : <></>}
            </div>
            

    )
}

export default SubmitButton

