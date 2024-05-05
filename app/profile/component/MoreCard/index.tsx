'use client'

import Image from "next/image"
import Link from "next/link"
import { DividerStyle, FeedBackButtonStyle, FeedBackButtonTextStyle, FeedBackIconStyle, FeedBackIconWrapperStyle, GoButtonStyle, GoIconStyle, GoWrapperStyle, MoreCardWrapperStyle, RegularButtonStyle } from "./style.css"
import GoIcon from "../../../../public/images/NextArrow.svg"
import FeedbackIcon from "../../../../public/images/Feedback.svg"
import { signOut } from "next-auth/react";
import toast from "react-hot-toast/headless"


type Props = {
    className ?: any
    style ?: any
}

const MoreCard = ({className, style}: Props) => {



    return (

        <div className={`${className} ${MoreCardWrapperStyle}`} style={style}>
            <button className={FeedBackButtonStyle}>
                <div className={FeedBackIconWrapperStyle}>
                    <Image src={FeedbackIcon} alt="" className={FeedBackIconStyle}/>
                </div>
                <Link href={'https://forms.gle/padVC81QrYiZDTEm7'} className={FeedBackButtonTextStyle}>A-Spot-Thur에게 피드백 보내기</Link>
                <div className={GoWrapperStyle}>
                    <div className={GoButtonStyle}>
                        <Image src={GoIcon} alt="" className={GoIconStyle}/>
                    </div>
                </div>
                
            </button>
            <div className={DividerStyle}/>
            <button className={RegularButtonStyle} onClick={()=>toast("구현중입니다!!!!!!!!")}>회원탈퇴</button>
            <button className={RegularButtonStyle} onClick={()=>signOut()}>로그아웃</button>
        </div>
       
    )

}

export default MoreCard