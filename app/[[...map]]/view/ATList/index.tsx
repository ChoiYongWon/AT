'use client'

import { useGhostHistory } from "@/app/_common/hook/useGhostHistory"
import { useObserver } from "@/app/_common/hook/useObserver"
import { selectedAreaState } from "@/app/_common/recoil"
import { AnimatePresence, motion } from "framer-motion"
import { forwardRef, useEffect, useRef } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { ATListCountStyle, ATListWrapper } from "./style.css"
import ATCard from "../../component/ATCard"
import Observer from "../../component/Observer"
import { atListSelector, atListState } from "../../recoil"

type Props = {
    className?: any
}


export const ATListView = ({className}: Props) => {

    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)
    const atListData: any  = useRecoilValue(atListSelector)
    const atListRawData  = useRecoilValue(atListState)


    useEffect(()=>{
        console.log(atListData)
    }, [atListData])

    useEffect(()=>{
        console.log(atListRawData)
    }, [atListRawData])

    const { use } = useGhostHistory({onPopState: ()=>setSelectedArea(null)})
    use() // useGhostHistory를 사용하는 곳

    // TODO SearchBar 상태 + url 상태 + selectedArea 상태에 따라 쿼리문 요청

    return (

        <>
            <div style={{marginTop: '30px'}} className={className}>
                {
                    atListData.count ? 
                    <div className={ATListCountStyle}>총 {atListData.count}개의 검색결과</div> : 
                    <></>
                }
                <div className={ATListWrapper}>
                    {
                        atListData?.data?.map((data: any, i: any)=>{
                            const {title, at_id, map_name, address, images, categories} = data
                            return <ATCard key={i} title={title} at_id={at_id} map_name={map_name} address={address} images={images} categories={categories}/>
                        })
                    }
                </div>
                <Observer/>
            </div>

        </>
        
    )
}

export default ATListView