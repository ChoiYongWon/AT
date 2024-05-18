"use client";

import Image from "next/image";
import GpsImage from "../../../../public/images/Gps.svg";
import LoadingGif from "../../../../public/images/loading.gif";

import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPosition } from "@/app/_common/util/location";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atQueryStageState, atQueryState, currentGps } from "../../recoil";
import { useReverseGeoCoding } from "@/app/_common/query/get/useReverseGeoCoding";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast/headless";



const GpsButton = () => {

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
            toast.error("위치를 불러올 수 없습니다.")
        }finally{
            setLoading(false)
        }
        
    }

    return (
        <button style={{
            opacity: localLoading || isGetLocationFetching ? 0.4 : 1
        }} className={ButtonStyle} onClick={onClick}>
            <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
                <Image className={ButtonImageStyle} src={GpsImage} alt="+" priority/>
            </motion.div>
        </button>


    );
};

export default GpsButton;
