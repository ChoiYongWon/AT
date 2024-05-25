'use client'

import { useGhostHistory } from "@/app/_common/hook/useGhostHistory"
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import { ATListCountStyle, ATListWrapper } from "./style.css"
import ATCard from "../../component/ATCard"
import Observer from "../../component/Observer"
import { atListSelector, atListState, selectedAreaState } from "../../recoil"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

type Props = {
    className?: any
}


export const ATListView = ({className}: Props) => {

    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)
    const atListData: any  = useRecoilValue(atListSelector)
    const atListRawData  = useRecoilValue(atListState)
    const resetATList  = useResetRecoilState(atListState)

    const { use } = useGhostHistory()

    // useEffect(()=>{
    //     console.log(cache)
    // }, [cache])

    // useEffect(()=>{
    //     // console.log(atListData)
    // }, [atListData])

    useEffect(()=>{
        return ()=>resetATList()
    }, [])

    use({onPopState: ()=>setSelectedArea(null)}) // useGhostHistory를 사용하는 곳

    return (

        <>
            <div style={{marginTop: '30px'}} className={className}>
                {
                    atListData.count ? 
                    <div className={ATListCountStyle}>총 {atListData.count}개의 검색결과</div> : 
                    <></>
                }
                <div className={ATListWrapper}>
                    <AnimatePresence mode="popLayout">
                        {
                            atListData?.list?.map((data: any, i: any)=>{
                                const {id, title, at_id, map_name, address, images, categories} = data
                                return <ATCard id={id} key={id} title={title} at_id={at_id} map_name={map_name} address={address} images={images} categories={categories}/>
                            })
                        }
                    </AnimatePresence>
                </div>
                
                <Observer/>
            </div>

        </>
        
    )
}

export default ATListView