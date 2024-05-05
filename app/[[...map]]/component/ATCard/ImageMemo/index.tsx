import Image from "next/image"
import { memo } from "react"
import { ATCardImageStyle } from "../style.css"

type Props = {
    index: number
    src: any
    className?: any
}

const ImageMemo = ({index, src, className}: Props) => {
    return (
        <Image key={index} src={src} alt="" width={120} height={120} className={ATCardImageStyle} placeholder="blur"
                        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="/>
    )
}

export default memo(ImageMemo, (prev, cur)=>prev.src==cur.src)