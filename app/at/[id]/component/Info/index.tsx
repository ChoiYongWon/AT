'use client'

import { useRecoilState, useRecoilValue } from "recoil";
import { atDataSelector, loadingState } from "../../recoil";
import { AddressStyle, AddressWrapperStyle, AuthorInfoStyle, BodyStyle, CategoryStyle, CategoryWrapperStyle, DividerStyle, EditStyle, EditWrapperStyle, InfoWrapperStyle, MetaInfoWrapperStyle, ReportStyle, TitleStyle, TitleWrapperStyle } from "./style.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { selectedAreaState } from "@/app/[[...map]]/recoil";
import IconButton from "@/app/_common/component/IconButton";
import Modal from "@/app/_common/component/Modal";
import ConfirmButton from "@/app/_common/component/ConfirmButton";
import { useDeleteAT } from "@/app/_common/query/delete/useDeleteAT";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast/headless";
import { useReportAT } from "@/app/_common/query/post/useReportAT";
// import dynamic from "next/dynamic";

// const Modal: any = dynamic(()=>import("@/app/_common/component/Modal"), {ssr: false})


type ReportType = "BAD_WORD" | "COMMERCIAL_USE" | "SEXUAL" | "UNRELATED"

type Props = {
    className?: any;
    style?: any;
}

const Info = ({
    className, style
}: Props) => {

    const session = useSession()
    const router = useRouter()
    const queryClient = useQueryClient()

    const reportValue = useRef<any>({
        "욕설이 포함된 게시물": "BAD_WORD",
        "상업적 용도의 게시물": "COMMERCIAL_USE",
        "성적인 게시물": "SEXUAL",
        "사진과 내용이 관련이 없는 게시물": "UNRELATED",
    })





    /* Recoil 상태 */
    const { title, user, categories, map, created_at, view_count, body, address, id } = useRecoilValue(atDataSelector)
    const isLoading = useRecoilValue(loadingState)
    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)

    /* 로컬 상태 */
    const [initialLoading, setInitialLoading] = useState(true)
    const [showDeleteModal, setDeleteModal] = useState(false)
    const [showReportModal, setReportModal] = useState(false)

    const [isDeleteLoading , setDeleteLoading] = useState(false)
    const [isReportLoading , setReportLoading] = useState(false)

    const [currentReportValue, setCurrentReportValue] = useState<ReportType>(reportValue.current[Object.keys(reportValue.current)[0]])

    /* API */
    const {mutateAsync: deleteAT, isPending: isDeleteATPending} = useDeleteAT()
    const {mutateAsync: reportAT, isPending: isReportATPending} = useReportAT()




    useEffect(()=>{
        setInitialLoading(isLoading)
    }, [isLoading])

    const onInfoClick = () => {
        setSelectedArea(null)
    }

    const onDeleteClick = async () => {
        try{
            setDeleteLoading(true)
            const result = await deleteAT({
                id
            })


            router.back()

            toast("삭제 완료")


            await queryClient.invalidateQueries({ queryKey: ['/at/list', selectedArea],  refetchType: 'all' })
            await queryClient.invalidateQueries({ queryKey: ['/at/count'], refetchType: 'all'  })

        }catch(e){
            setDeleteModal(false)
            toast.error("삭제 실패")
        }
    }

    const onReportClick = async () => {
        try{
            if(!session.data?.user){
                router.push("/login")
                toast.error("로그인이 필요합니다.")
                return;
            }
            if(session.data?.user.id == user.id) {
                setReportModal(false)
                toast.error("본인 게시물은 신고할 수 없습니다.")
                return
            }

            setReportLoading(true)
            const result = await reportAT({
                at_id: id,
                type: currentReportValue,
                // etc 추가
            })

            toast("신고 완료")
            setReportLoading(false)
            setReportModal(false)


        }catch(e: any){
            setReportLoading(false)
            setReportModal(false)
            toast.error(e.message)
        }
    }

    useEffect(()=>{
        if(!isDeleteATPending) setDeleteLoading(false)
    }, [isDeleteATPending])


    return (
        <div className={`${InfoWrapperStyle} ${className}`} style={style}>
            <div style={{marginBottom: "16px"}}>
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "150px"}}/> : <Link onClick={onInfoClick} href={`/${user.at_id}/${map.name}`} className={AuthorInfoStyle} >@{user.at_id}의 {map.name}지도</Link>
                }

            </div>
            <div className={TitleWrapperStyle} style={{marginBottom: "20px"}}>
                <div className={AddressWrapperStyle}>
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "100px", height: "24px"}}/> : <div className={TitleStyle}>{title}</div>
                }
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "100px", height: "12px"}}/> :  <div className={AddressStyle}>{address}</div>
                }
                </div>
                {
                        isLoading || initialLoading ? <Skeleton circle style={{width: "34px", height: "34px"}}/> :  <Link target="_blank" href={`https://map.naver.com/p/search/${encodeURI(`${address.split(" ")[0]} ${address.split(" ")[1]} ${address.split(" ")[2]} ${title}`)}`}><IconButton size="34px" type="next"/></Link>
                }

            </div>
            <div className={MetaInfoWrapperStyle} style={{marginBottom: "12px"}}>
                {
                    isLoading || initialLoading ? <Skeleton style={{width: "100px", height: "12px"}}/> :  <span>작성일 {created_at}</span>
                }

                <div className={EditWrapperStyle}>
                    {
                        isLoading || initialLoading ? <Skeleton style={{width: "20px", height: "12px"}}/> :  session.data?.user.id == user.id ? <button name={"delete_button"} onClick={()=>setDeleteModal(true)} className={EditStyle}>삭제</button> : <></>
                    }
                    {
                        isLoading || initialLoading ? <Skeleton style={{width: "20px", height: "12px"}}/> :   session.data?.user.id == user.id ? <Link href={`/edit/${id}`} className={EditStyle} prefetch={true}>수정</Link> : <></>
                    }
                    {
                        isLoading || initialLoading ? <Skeleton style={{width: "20px", height: "12px"}}/> :  <>조회 {view_count.toLocaleString()}</>
                    }

                </div>
            </div>
            <div className={DividerStyle} style={{marginBottom: "40px"}}/>
            {
                isLoading || initialLoading ? <Skeleton count={5} style={{height: "14px", marginBottom: "8px"}}/>
                :
                <>
                {
                    body.split("\n").map((data, i)=>{
                        if(data == "") return <br key={i}></br>
                        return <p key={i} className={BodyStyle}>{data}</p>
                    })
                }
                </>
            }

            <div style={{marginBottom: "24px", marginTop: "50px"}}>
            {
                isLoading || initialLoading ? <Skeleton style={{width: "100px"}}/> :  <span onClick={()=>setReportModal(true)} className={ReportStyle}>이 게시글 신고하기</span>
            }

            </div>
            <div className={CategoryWrapperStyle} style={{marginBottom: "40px"}}>
                {
                    categories.map((category, i)=>{
                        return <div className={CategoryStyle} key={i}>{category.name}</div>
                    })
                }
            </div>
            <Modal show={showDeleteModal} setShow={setDeleteModal}>
                <Modal.Title>정말 삭제할까요?</Modal.Title>
                <Modal.Content>한번 삭제하면 되돌릴 수 없습니다.</Modal.Content>
                <Modal.ButtonGroup style={{marginTop: "14px"}}>
                    <Modal.Button  onClick={()=>setDeleteModal(false)}>취소</Modal.Button>
                    <ConfirmButton onClick={onDeleteClick} loading={isDeleteATPending || isDeleteLoading} style={{flex: 1}} text="삭제"/>
                </Modal.ButtonGroup>
            </Modal>

            <Modal show={showReportModal} setShow={setReportModal}>
                <Modal.Title>신고 사유</Modal.Title>
                <Modal.Content style={{fontStyle: "italic"}}>허위 신고시 제재받을 수 있습니다.</Modal.Content>
                <Modal.RadioGroup style={{marginTop: "8px"}}>
                    {
                        Object.keys(reportValue.current).map((value, i)=>{
                            return <Modal.RadioButton key={i} onCheck={()=>setCurrentReportValue(reportValue.current[value])} currentValue={currentReportValue} value={reportValue.current[value]} name={"report"}>{value}</Modal.RadioButton>
                        })
                    }
                </Modal.RadioGroup>
                <ConfirmButton onClick={onReportClick} loading={isReportATPending || isReportLoading} style={{marginTop: "8px"}} text="신고"/>
            </Modal>
        </div>
    )
}

export default Info