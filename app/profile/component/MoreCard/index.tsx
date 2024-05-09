'use client'

import Image from "next/image"
import Link from "next/link"
import { DividerStyle, FeedBackButtonStyle, FeedBackButtonTextStyle, FeedBackIconStyle, FeedBackIconWrapperStyle, GoButtonStyle, GoIconStyle, GoWrapperStyle, MoreCardWrapperStyle, RegularButtonStyle } from "./style.css"
import GoIcon from "../../../../public/images/NextArrow.svg"
import FeedbackIcon from "../../../../public/images/Feedback.svg"
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast/headless"
import { useDeleteUser } from "@/app/_common/query/delete/useDeleteUser"
import Modal from "@/app/_common/component/Modal"
import { useState } from "react"
import ConfirmButton from "@/app/_common/component/ConfirmButton"
import { useQueryClient } from "@tanstack/react-query"


type Props = {
    className ?: any
    style ?: any
}

const MoreCard = ({className, style}: Props) => {

    const {mutateAsync: deleteUser, isPending: isDeleteUserPending} = useDeleteUser()
    const [showDeleteModal, setDeleteModal] = useState(false)
    const [isDeleteLocalLoading, setDeleteLocalLoading] = useState(false)
    const queryClient = useQueryClient()
    const session = useSession()


    const onDeleteClick = async () => {
        try{ 
            setDeleteLocalLoading(true)
            await deleteUser()
            // 성공시

            setDeleteLocalLoading(false)
            setDeleteModal(false)
            await queryClient.invalidateQueries({ queryKey: ['/at/list'],  refetchType: 'all' })
            await queryClient.invalidateQueries({ queryKey: ['/at/count'], refetchType: 'all'  })
            await signOut({callbackUrl: "/"})

            toast("탈퇴 완료")

        }catch(e){
            toast.error("서버 오류")
        }

    }


    return (
        <>
            <div className={`${className} ${MoreCardWrapperStyle}`} style={style}>
                <Link href={'https://forms.gle/padVC81QrYiZDTEm7'} target="_blank" className={FeedBackButtonStyle}>
                    <div className={FeedBackIconWrapperStyle}>
                        <Image src={FeedbackIcon} alt="" className={FeedBackIconStyle}/>
                    </div>
                    <span className={FeedBackButtonTextStyle}>A-Spot-Thur에게 피드백 보내기</span>
                    <div className={GoWrapperStyle}>
                        <div className={GoButtonStyle}>
                            <Image src={GoIcon} alt="" className={GoIconStyle}/>
                        </div>
                    </div>
                    
                </Link>
                <div className={DividerStyle}/>
                <button className={RegularButtonStyle} onClick={()=>toast("구현중입니다!!!!!!!!")}>FAQ</button>
                <button className={RegularButtonStyle} onClick={()=>toast("구현중입니다!!!!!!!!")}>서비스 소개</button>
                <button className={RegularButtonStyle} onClick={()=>toast("구현중입니다!!!!!!!!")}>이용 약관</button>
                <button className={RegularButtonStyle} onClick={()=>toast("구현중입니다!!!!!!!!")}>개인정보처리방침</button>
                {session.data?.user ? <button className={RegularButtonStyle} onClick={()=>setDeleteModal(true)}>회원탈퇴</button> : <></>}
                {session.data?.user ? <button className={RegularButtonStyle} onClick={()=>signOut()}>로그아웃</button> : <></>}
            </div>
            <Modal show={showDeleteModal} setShow={setDeleteModal}>
                <Modal.Title>정말 탈퇴하시나요?</Modal.Title>
                <Modal.Content>등록한 모든 장소들이 전부 삭제됩니다.<br></br>탈퇴하면 되돌릴 수 없습니다.</Modal.Content>
                <Modal.ButtonGroup style={{marginTop: "14px"}}>
                    <Modal.Button onClick={()=>setDeleteModal(false)}>취소</Modal.Button>
                    <ConfirmButton loading={isDeleteLocalLoading || isDeleteUserPending} onClick={onDeleteClick} style={{flex: 1}} text="탈퇴"/>
                </Modal.ButtonGroup>
            </Modal>
        </>
       
    )

}

export default MoreCard