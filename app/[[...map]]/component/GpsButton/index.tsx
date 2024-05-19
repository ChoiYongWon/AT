"use client";

import { getPosition } from "@/app/_common/util/location";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atQueryStageState, atQueryState, currentGps } from "../../recoil";
import { useReverseGeoCoding } from "@/app/_common/query/get/useReverseGeoCoding";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast/headless";
import { motion } from "framer-motion"
import { CardSyle, IndicatorTapGroupStyle, IndicatorWrapperStyle, NameStyle } from "./style.css"

type Props = {
    x: number
    y: number
    onClick?: any
}

const GpsButton = ({x, y}: Props) => {

    const width = useRef(56)
    const height = useRef(38)

    const [gpsInfo, setGps] = useRecoilState(currentGps)
    const [localLoading, setLoading] = useState(false)
    const [queryList, setQueryList] = useRecoilState(atQueryState)


    /* SearchBar에서 다른 컴포넌트(Map, ATList)들이 요청하는 조건 */
    const setQueryStage = useSetRecoilState(atQueryStageState)

    const [enableLocationQuery, { data: locationData, isSuccess: isGetLocationSuccess, isFetching: isGetLocationFetching, isFetchedAfterMount: isLocationFetched, 
    }] = useReverseGeoCoding({
        longitude: gpsInfo.longitude,
        latitude: gpsInfo.latitude
    })

    useEffect(()=>{
        if(isLocationFetched && isGetLocationSuccess){
            if(locationData){
                if(!queryList.includes(locationData.data)){
                    setQueryList([...queryList, locationData.data])
                    setQueryStage((prev)=>[...prev,locationData.data])
                }
            }
        }
    }, [isLocationFetched, isGetLocationSuccess])

    const onClick = async () => {
        if(localLoading){
            toast.error("불러오는중 입니다.")
            return
        }
        try{
            setLoading(true)
            const position = await getPosition()
            if(gpsInfo.latitude == position.coords.latitude.toString() && gpsInfo.longitude == position.coords.longitude.toString()){
                if(!queryList.includes(locationData.data)){
                    setQueryList([...queryList, locationData.data])
                    setQueryStage((prev)=>[...prev,locationData.data])
                }
            }else{
                setGps({ longitude: position.coords.longitude.toString(), latitude: position.coords.latitude.toString()})
            }
            enableLocationQuery() // prevent refetch on initial mount
            
        }catch(e){
            // toast.error(JSON.stringify(e))
            toast.error("위치 액세스를 허용하거나 앱을 재시작하세요.")
        }finally{
            setLoading(false)
        }
        
    }

    return (
        <g style={{
            opacity: localLoading || isGetLocationFetching ? 0.4 : 1
        }} transform={`translate(${x},${y}) scale(1.1)`} className={IndicatorWrapperStyle} onClick={onClick}>
            <motion.g className={IndicatorTapGroupStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
                <rect x={0} y={0} width={width.current} height={height.current} rx={5} ry={5} className={CardSyle}/>
                <text className={NameStyle} x={width.current / 2} y={height.current - 24}>내 주변</text>
                <svg x={width.current / 2 - 7} y={height.current - 9 - 9} fill="#EF6F12" height="14px" width="14px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 297 297" xmlSpace="preserve">
                    <path d="M148.5,0C66.653,0,0.067,66.616,0.067,148.499C0.067,230.383,66.653,297,148.5,297s148.433-66.617,148.433-148.501
                        C296.933,66.616,230.347,0,148.5,0z M158.597,276.411v-61.274c0-5.575-4.521-10.097-10.097-10.097s-10.097,4.521-10.097,10.097
                        v61.274c-62.68-4.908-112.845-55.102-117.747-117.814h61.207c5.575,0,10.097-4.521,10.097-10.097s-4.522-10.097-10.097-10.097
                        H20.656C25.558,75.69,75.723,25.497,138.403,20.589v61.274c0,5.575,4.521,10.097,10.097,10.097s10.097-4.521,10.097-10.097V20.589
                        c62.681,4.908,112.846,55.102,117.747,117.814h-61.207c-5.575,0-10.097,4.521-10.097,10.097s4.521,10.097,10.097,10.097h61.207
                        C271.441,221.31,221.276,271.503,158.597,276.411z"/>
                </svg>
            </motion.g>
            
            
        </g>
    )
}

export default GpsButton;