'use client'

import Image from "next/image"
import { MapFormArrowDownStyle, MapFormButtonStyle, MapFormButtonWrapperStyle, MapFormWrapperStyle } from "./style.css"
import ArrowDown from "../../../../public/images/ArrowDown.svg"

import { useState } from "react"
import { assignInlineVars } from "@vanilla-extract/dynamic"
import { useRecoilValue } from "recoil"
import { mapState } from "../../recoil"

import MapList from "./MapList"

type Props = {
    className ?: any
    style ?: any
}

const MapForm = ({className, style}: Props) => {

    const [toggle, setToggle] = useState(false)
    const selectedMap = useRecoilValue(mapState)

    // 지도 버튼 클릭 시
    const onButtonClick = (e: any) => {
        setToggle(!toggle)
    }

    const closeToggle = () => {
        setToggle(false)
    }
    
    return (
        <div style={style} className={MapFormWrapperStyle}>
            <div className={MapFormButtonWrapperStyle} onClick={onButtonClick}>
                <div className={MapFormButtonStyle}>
                    { selectedMap.id ? selectedMap.name : "지도를 선택해주세요" }
                </div>
                <Image src={ArrowDown} alt="" className={MapFormArrowDownStyle} style={assignInlineVars({
                        transform: toggle ? "rotate(-180deg)" : "rotate(0)"
                })}/>
            </div>
            
            {/* 렌더링 성능을 위해 */}
            <MapList closeToggle={closeToggle} style={assignInlineVars({
                opacity: toggle ? "1" : "0",
                visibility: toggle ? "visible" : "hidden"
            })}/>

        </div>
    )
}

export default MapForm