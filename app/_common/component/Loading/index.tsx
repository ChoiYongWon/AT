import Image from "next/image"
import { ImageStyle, LoadingStyle } from "./style.css"
import LoadingImage from "../../../../public/images/Loading.svg"


type Props = {
    className?: any
}

const Loading = ({className}: Props) => {
    return (
        <div className={`${className} ${LoadingStyle}`}>
            <Image alt="" src={LoadingImage} className={ImageStyle}/>
        </div>

    )
}

export default Loading