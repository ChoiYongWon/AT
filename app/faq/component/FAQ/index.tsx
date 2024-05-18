import Image from "next/image"
import { FAQDetailStyle, FAQDetailWrapperStyle, FAQImageStyle, FAQImageWrapperStyle, FAQSummaryButtonStyle, FAQSummaryButtonWrapperStyle, FAQSummaryQuestionStyle, FAQSummaryWrapperStyle, FAQWrapperStyle } from "./style.css"
import ArrowDown from "../../../../public/images/ArrowDown.svg"

type Props = {
    className?: any
    style?: any
    children: any
}

const FAQ = ({children, className, style}: Props) => {

    return (
        <details className={`${FAQWrapperStyle} ${className}`} style={style}>
            {children}
        </details>
    )
}

const Summary = ({children}: any) => {
    return (
        <summary className={FAQSummaryWrapperStyle}>
            <span className={FAQSummaryQuestionStyle}>Q.</span>
            {children}
            <div className={FAQSummaryButtonWrapperStyle}>
                <Image className={FAQSummaryButtonStyle} src={ArrowDown} alt="" priority/>
            </div>
        </summary>
    )
}

const Asset = ({src, width, height}: {src: string, width: number, height: number})=>{
    return(
        <div className={FAQImageWrapperStyle}>
            <Image className={FAQImageStyle} src={src} alt="" width={width} height={height}/>
        </div>
    )
}

const Detail = ({children, style}: any) => {
    return(
        <div className={FAQDetailWrapperStyle} style={style}>
            <p className={FAQDetailStyle}>{children}</p>
        </div>
        
    )
}

FAQ.Summary = Summary
FAQ.Image = Asset
FAQ.Detail = Detail

export default FAQ