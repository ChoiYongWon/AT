'use client'

import { useGhostHistory } from "@/app/_common/hook/useGhostHistory"
import { useObserver } from "@/app/_common/hook/useObserver"
import { selectedAreaState } from "@/app/_common/recoil"
import { motion } from "framer-motion"
import { forwardRef, useEffect, useRef } from "react"
import { useRecoilState } from "recoil"
import { ATListWrapper } from "./style.css"
import ATCard from "../../component/ATCard"

type Props = {
    className?: any
}

export const ATListView = ({className}: Props, ref: any) => {

    const [selectedArea, setSelectedArea] = useRecoilState(selectedAreaState)
    const observerTargetRef = useRef(null)
    const { use } = useGhostHistory({onPopState: ()=>setSelectedArea(null)})
    use() // useGhostHistory를 사용하는 곳

    const dummyData = [
        {
            "title": "왕거미식당",
            "address": "대구광역시 중구 동인동4가 179",
            "at_id": "yongwon0824",
            "map_name": "맛집",
            "images": [
                {
                    "url": "https://s3.a-spot-thur.app/user/clu1j8z730003lzqe1qcp5rq7/6b83d62c-ae4d-40f4-9b6f-0c4a4ac7c888.jpeg",
                    "sequence": 1
                },
                {
                    "url": "https://s3.a-spot-thur.app/user/clu1j8z730003lzqe1qcp5rq7/6b83d62c-ae4d-40f4-9b6f-0c4a4ac7c888.jpeg",
                    "sequence": 1
                },

           
            ],
            "categories": [
                "육회", "뭉티기", "왕거미", "왕거미식당", "소등골", "소갈비살"
            ]
        }
    ]
    // const {setObserveTarget} = useObserver({
    //     callback: handleObserver,
    //     options: {
    //         threshold: 0.2
    //     },
    // })

    // useEffect(()=>{
    //     // console.log(observerTargetRef)

    //     //
    //     setObserveTarget(observerTargetRef.current)
    // }, [])

    // function handleObserver(entries: IntersectionObserverEntry[], observer: IntersectionObserver){
    //     entries.forEach((entry)=>{
    //         if(entry.isIntersecting) console.log("INTERSECTING")
    //     })
        
    // }



    // TODO SearchBar 상태 + url 상태 + selectedArea 상태에 따라 쿼리문 요청

    return (
        <motion.div 
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.1 }}
            ref={ref} style={{marginTop: '30px'}} className={className}>
            <div className={ATListWrapper}>
                {
                    dummyData.map((data)=>{
                        return <ATCard title={data.title} at_id={data.at_id} map_name={data.map_name} address={data.address} images={data.images} categories={data.categories}/>
                    })
                }
            </div>
        </motion.div>
    )
}

export default forwardRef(ATListView)