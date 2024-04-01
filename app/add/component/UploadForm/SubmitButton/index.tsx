'use client'

import { ButtonStyle } from "./style.css";

type Props = {
    style ?: any;
}

const SubmitButton = ({ style }: Props) => {
    return (
        // 엔터 시 제출되는거 방지하기위해 div로 함
        <div style={style} className={ButtonStyle} onClick={()=>alert("개발중")}>추가 하기</div>
    )
}

export default SubmitButton

