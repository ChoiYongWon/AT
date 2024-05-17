'use client'

import { useReport } from "@/app/_common/query/get/useReport"
import { LinkStyle, TBodyStyle, TDStyle, THStyle, THeadStyle, TRStyle, TableWrapperStyle } from "./style.css"
import { useEffect, useState } from "react"
import ConfirmButton from "@/app/_common/component/ConfirmButton"
import Modal from "@/app/_common/component/Modal"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useBan } from "@/app/_common/query/post/useBan"
import toast from "react-hot-toast/headless"
import dayjs from "dayjs"
import { useUpdateReport } from "@/app/_common/query/put/useUpdateReport"
import { useQueryClient } from "@tanstack/react-query"

type Props = {
    data: any[]
}

type UserInfo = {
    email: string,
    at_id: string,
    id: string,
    name: string,
    type: string
}

export const Table = ({data}: Props) => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const [page, setPage] = useState(0)
    const [showBanModal, setBanModal] = useState(false)
    const [selectInfo, setSelectInfo] = useState<UserInfo>({
        email: "",
        at_id: "",
        id: "",
        name: "",
        type: ""
    })
    const [banInput, setBanInput] = useState("")
    const [localBanLoading, setLocalBanLoading] = useState(false)
    const { refetch: getReport,  isLoading: isReportLoading, isFetching: isGetReportFetching, data: reportData} = useReport(page)
    const {mutateAsync: ban, isPending: isBanPending} = useBan()
    const { mutateAsync: resolveReport, isPending: isResolveReportLoading } = useUpdateReport();


    useEffect(()=>{
        if(!showBanModal) setBanInput("")
    }, [showBanModal])

    const onBanInputChange = (e: any) => {
        setBanInput(e.target.value)
    }

    const onBanConfirmClick = async () => {
        try{
            if(!banInput.length) {
                toast.error("사유를 적어주세요")
                return
            }
            setLocalBanLoading(true)
            await ban({
                email: selectInfo.email,
                reason: banInput
            })
            toast("밴 완료")
            setBanModal(false)
            setLocalBanLoading(false)

        }catch(e: any){
            toast.error(e.message)
            setBanModal(false)
            setLocalBanLoading(false)
        }
        
    }

    const onUserClick = (userInfo : UserInfo) => {
        setSelectInfo(userInfo)
        setBanModal(true)
    }

    const onResolveClick = async (spot_id: string) => {
        try{
            await resolveReport({
                spot_id,
                resolved: true
            })
            await queryClient.invalidateQueries({ queryKey: ['/report', page], refetchType: 'all'  })
            toast("처리 완료")
        }catch(e: any){
            toast.error(e.message)
            
        }
        
    }

    return (
        <>
            <table className={TableWrapperStyle}>
                <thead className={THeadStyle}>
                    <tr className={TRStyle}>
                        <th className={THStyle}>No.</th>
                        <th className={THStyle}>신고자 ID</th>
                        <th className={THStyle}>신고자명</th>
                        <th className={THStyle}>게시물</th>
                        <th className={THStyle}>피신고자 ID</th>
                        <th className={THStyle}>피신고자명</th>
                        <th className={THStyle}>신고 유형</th>
                        <th className={THStyle}>신고 날짜</th>
                        <th className={THStyle}>처리</th>
                    </tr>
                </thead>
                <tbody className={TBodyStyle}>
                    {
                        reportData?.data?.map((data, i)=>{
                            return (
                                <tr className={TRStyle} key={i}>
                                    <td className={TDStyle}>{i+1}</td>
                                    <td className={TDStyle}>
                                        <button onClick={()=>onUserClick({
                                            name: data.user.name,
                                            email: data.user.email,
                                            at_id: data.user.at_id,
                                            id: data.user.id,
                                            type: data.type
                                        })} className={LinkStyle}>{data.user.at_id}</button>
                                    </td>
                                    <td className={TDStyle}>{data.user.name}</td>
                                    <td className={TDStyle}>
                                        <Link href={`/at/${data.spot.id}`} target="_blank" className={LinkStyle}>{data.spot.id}</Link>
                                    </td>
                                    <td className={TDStyle}>
                                        <button onClick={()=>onUserClick({
                                            name: data.spot.user.name,
                                            email: data.spot.user.email,
                                            at_id: data.spot.user.at_id,
                                            id: data.spot.user.id,
                                            type: data.type
                                        })} className={LinkStyle}>{data.spot.user.at_id}</button>
                                    </td>
                                    <td className={TDStyle}>{data.spot.user.name}</td>
                                    <td className={TDStyle}>{data.type}</td>
                                    <td className={TDStyle}>{dayjs(data.created_at).format("YYYY/MM/DD - HH:mm")}</td>

                                    <td className={TDStyle}>
                                        <button onClick={()=>onResolveClick(data.spot.id)} className={LinkStyle}>처리 하기</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Modal show={showBanModal} setShow={setBanModal}>
                <Modal.Title>사용자 밴</Modal.Title>
                <Modal.Content>{selectInfo.at_id}<br></br>{selectInfo.email}</Modal.Content>
                <Modal.Content>사유 : {selectInfo.type}</Modal.Content>
                <Modal.Input placeholder="사유" value={banInput} onChange={onBanInputChange}></Modal.Input>
                <ConfirmButton onClick={onBanConfirmClick} loading={localBanLoading || isBanPending} style={{marginTop: "8px"}} text="밴"/>
            </Modal>
        </>
        
    )
}