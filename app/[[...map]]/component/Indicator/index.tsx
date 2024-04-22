'use client'

import { useEffect, useRef } from "react";
import { CardSyle, CountStyle, IndicatorWrapperStyle, LoadingStyle, NameStyle } from "./style.css"
import { useCountUp } from 'react-countup';
import { useRecoilValue } from "recoil";
import { atLoadingState, atSelector } from "../../recoil";
import Loading from "@/app/_common/component/Loading";
import { AnimatePresence, motion } from "framer-motion";

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
    const loading = useRecoilValue(atLoadingState)

    const { start, pauseResume, reset, update } = useCountUp({
		end: at[name],
		duration: 2,
		useEasing: true,
		ref: countUpRef,
	});

    useEffect(()=>{
        start()
    }, [])

    return (
        <g transform={`translate(${x},${y}) scale(1.1)`} className={IndicatorWrapperStyle}>
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