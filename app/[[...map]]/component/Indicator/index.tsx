'use client'

import { useEffect, useRef } from "react";
import { CardSyle, CountStyle, IndicatorWrapperStyle, LoadingStyle, NameStyle } from "./style.css"
import { useCountUp } from 'react-countup';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { areaNameReverse, atLoadingState, atSelector } from "../../recoil";
import Loading from "@/app/_common/component/Loading";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { selectedAreaState } from "@/app/_common/recoil";
import { useGhostHistory } from "@/app/_common/hook/useGhostHistory";

type Props = {
    x: number
    y: number
    name: string
}

const Indicator = ({x, y, name}: Props) => {

    const countUpRef = useRef(null)
    const width = useRef(56)
    const height = useRef(38)
    const at = useRecoilValue(atSelector)
    const setSelectedArea = useSetRecoilState(selectedAreaState)
    const { push } = useGhostHistory({})


    const loading = useRecoilValue(atLoadingState)
    const router = useRouter()

    const { start, pauseResume, reset, update } = useCountUp({
		end: at[name],
		duration: 2,
		useEasing: true,
		ref: countUpRef,
	});

    useEffect(()=>{
        start()
    }, [])

    const onClick = () => {
        // 스택만 쌓기 위해 (뒤로가기를 위한 스택)
        push()
        setSelectedArea(areaNameReverse[name])
    }

    return (
        <g transform={`translate(${x},${y}) scale(1.1)`} className={IndicatorWrapperStyle} onClick={onClick}>
            <rect x={0} y={0} width={width.current} height={height.current} rx={5} ry={5} className={CardSyle}/>
            <text className={NameStyle} x={width.current / 2} y={height.current - 24}>{name}</text>

            <AnimatePresence mode="wait">
                {
                    loading ?  
                    <motion.rect 
                        // key={name+"loading"} 
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }} className={LoadingStyle} fill="#e6e6e6" x={width.current / 2 - 6} y={height.current - 15} width={12} height={2} rx={1} ry={1}></motion.rect>
                    : 

                    <motion.text
                        // key={name+"value"} 
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        ref={countUpRef} className={CountStyle} x={width.current / 2} y={height.current - 10}>{at[name] || 0}</motion.text>
                }

            </AnimatePresence>
            
        </g>
    )
}

export default Indicator