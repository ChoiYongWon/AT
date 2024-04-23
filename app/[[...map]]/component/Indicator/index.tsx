'use client'

import { useEffect, useRef } from "react";
import { CardSyle, CountStyle, IndicatorTapGroupStyle, IndicatorWrapperStyle, LoadingStyle, NameStyle } from "./style.css"
import { useCountUp } from 'react-countup';
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    x: number
    y: number
    name: string
    count: number
    onClick: any
    isLoading: boolean
}

const Indicator = ({x, y, name, count, onClick, isLoading}: Props) => {

    const countUpRef = useRef(null)
    const width = useRef(56)
    const height = useRef(38)

    const { start, pauseResume, reset, update } = useCountUp({
		end: count,
		duration: 2,
		useEasing: true,
		ref: countUpRef,
	});

    useEffect(()=>{
        start()
    }, [count])

    return (
        <g transform={`translate(${x},${y}) scale(1.1)`} className={IndicatorWrapperStyle} onClick={onClick}>
            <motion.g className={IndicatorTapGroupStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
                <rect x={0} y={0} width={width.current} height={height.current} rx={5} ry={5} className={CardSyle}/>
                <text className={NameStyle} x={width.current / 2} y={height.current - 24}>{name}</text>

                <AnimatePresence mode="wait">
                    {
                        isLoading ?  
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
                            ref={countUpRef} className={CountStyle} x={width.current / 2} y={height.current - 10}>{count || 0}</motion.text>
                    }

                </AnimatePresence>
            </motion.g>
            
            
        </g>
    )
}

export default Indicator