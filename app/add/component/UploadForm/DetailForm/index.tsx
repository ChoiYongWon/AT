'use client'

import { useRecoilState } from "recoil"
import { DetailInputStyle, DetailInputWrapperStyle } from "./style.css"
import { detailState } from "@/app/add/recoil"

const DetailForm = () => {

    const [detailInput, setDetailInput] = useRecoilState(detailState)

    const onChange = (e: any) => {
        setDetailInput(e.target.value)
    }

    return <div className={DetailInputWrapperStyle}>
        <textarea className={DetailInputStyle} value={detailInput} onChange={onChange} spellCheck={false} placeholder="해당 맛집에 대해 간단한 내용을 작성해 주세요. (솔직한 후기, 맛집 소개, 추천 사유 등등)"/>
    </div>
}

export default DetailForm