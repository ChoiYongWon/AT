'use client'

import { useEffect, useRef } from "react";
import { CardSyle, CountStyle, IndicatorWrapperStyle, NameStyle } from "./style.css"
import { useCountUp } from 'react-countup';

type Props = {
    x: number
    y: number
    name: string
    count: number
}

const Indicator = ({x, y, name, count}: Props) => {

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
    }, [])

    return (
        <g transform={`translate(${x},${y}) scale(1.1)`} className={IndicatorWrapperStyle}>
            <rect x={0} y={0} width={width.current} height={height.current} rx={5} ry={5} className={CardSyle}/>
            <text className={NameStyle} x={width.current / 2} y={height.current - 24}>{name}</text>
            <text ref={countUpRef} className={CountStyle} x={width.current / 2} y={height.current - 10}>{count}</text>
        </g>
    )

}

export default Indicator