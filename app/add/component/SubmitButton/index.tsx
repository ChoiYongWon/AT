'use client'

import { useRecoilValue } from "recoil";
import { ButtonMessageStyle, ButtonWrapperStyle, vibrate } from "./style.css";
import { formSelector, imageMapSelector } from "../../recoil";
import { usePresignedUrl } from "@/app/_common/query/post/usePresignedUrl";
import { useUploadImageToS3 } from "@/app/_common/query/post/useUploadImageToS3";
import { useEffect, useState } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useUploadAT } from "@/app/_common/query/post/useUploadAT";
import { useSession } from "next-auth/react";
import { PostBody } from "@/app/api/at/route";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import ConfirmButton from "@/app/_common/component/ConfirmButton";
import toast from "react-hot-toast/headless";
import Modal from "@/app/_common/component/Modal";
import { BanDataType } from "@/app/api/error/at/Banned.error";
import dayjs from "dayjs";



type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {

    const session = useSession();
    const router = useRouter();
    const queryClient = useQueryClient()
    const formState = useRecoilValue(formSelector)
    const [loading, setLoading] = useState(false)
    const [isDisabled, setDisable] = useState(true)
    const imageMap = useRecoilValue(imageMapSelector)
    const [errorState, setErrorState] = useState({
        isError: false,
        message: ""
    })
    const [showBanModal, setBanModal] = useState(false)
    const [banData, setBanData] = useState<BanDataType>({
        reason: '',
        day: 0,
        expire_at: new Date()
    })


    const {mutateAsync: getPresignedUrl, data: presignedData, isSuccess, isError: isPresignedUrlError} = usePresignedUrl()
    const {mutateAsync: uploadImageToS3, isError: isUplaodError, error: uploadError, isPending: isUploadImagePending} = useUploadImageToS3()
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
            if(formState.image.length > 10){
                setErrorState({isError: true, message: "이미지는 최대 10개만 등록할 수 있습니다."})
                toast.error("이미지는 최대 10개만 등록할 수 있습니다.")
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

            const imageNameList = formState.image.map((item)=>(`${item.name}.${item.ext}`))
            

            const postBody:PostBody = {
                key: imageNameList.map((image: string)=>(`user/${session.data?.user.id}/${image}`)),
                category: [...formState.category],
                name: formState.address.name,
                address: formState.address.address,
                detail: formState.detail,
                mapId: formState.map.id as string,
            }

            await uploadAT(postBody)
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

            router.back()

            // 캐시 초기화

            // Observer가 보일 경우 안됨

            toast("등록 완료")

            await queryClient.invalidateQueries({ queryKey: ['/at/list', formState.address.address.split(" ")[0]],  refetchType: 'all' })
            await queryClient.invalidateQueries({ queryKey: ['/map/aggregate'], refetchType: 'all'  })
            await queryClient.invalidateQueries({ queryKey: ['/at/count'], refetchType: 'all'  })

        }catch(e: any){

            // TODO presigned 에서 용량 문제로 업로드 실패시 알림
            setLoading(false)
            toast.error(e.message)
            console.log(e)
            if(e.status == "E10003"){ // 벤 된 사용자
                setBanData(e.data)
                setBanModal(true)
            }
            
            setErrorState({isError: true, message: e.message})
        }finally{
            setLoading(false)
        }

    }

    return (
            <div style={style} className={ButtonWrapperStyle}> 
                <ConfirmButton loading={loading} onClick={onClick} disabled={isDisabled} text="추가하기" style={{height: "50px", fontSize: "18px", marginTop: "8px" }}/>
                { errorState.isError ? <div className={ButtonMessageStyle} style={assignInlineVars({animation: `${vibrate} .3s`})}>{errorState.message}</div> : <></>}
                <Modal show={showBanModal} setShow={setBanModal}>
                    <Modal.Title>제한된 사용자</Modal.Title>
                    <Modal.Content style={{fontStyle: "italic"}}>사유 : {banData.reason}</Modal.Content>
                    <Modal.Content style={{}}>사용 정지 {banData.day}일<br></br>정지 해제 일 : {dayjs(banData.expire_at).format('YYYY. MM. DD. HH시 mm분')}</Modal.Content>
                    <ConfirmButton onClick={()=>setBanModal(false)} style={{marginTop: "8px"}} text="확인"/>
                </Modal>
            </div>
            

    )
}

export default SubmitButton

