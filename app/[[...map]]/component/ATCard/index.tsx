import { ATCardAddressStyle, ATCardCategoryStyle, ATCardCategoryWrapperStyle, ATCardIDStyle, ATCardImageStyle, ATCardImageWrapperStyle, ATCardInfoWrapperStyle, ATCardNextButtonSyle, ATCardNextImageStyle, ATCardTextWrapperStyle, ATCardTitleStyle, ATCardWrapperStyle } from "./style.css"
import Image from "next/image"
import NextArrow from "../../../../public/images/NextArrow.svg"
import Link from "next/link"
import { forwardRef } from "react"
import { motion } from "framer-motion"


type Props = {
    className ?: any
    id: string,
    title: string,
    at_id: string,
    map_name: string,
    images: any[],
    address: string,
    categories: string[],
}

const ATCard = ({id, title, at_id, map_name, images, address, categories, className}: Props, ref: any) => {

    return (
        <motion.div ref={ref} key={id} layout animate={{ }} exit={{  }} transition={{ type: "just", duration: 0.2 }}>
            <Link href={"/at/"+id} className={ATCardWrapperStyle} prefetch={true}>
            <div className={ATCardInfoWrapperStyle}>
                <div className={ATCardIDStyle}>@{at_id}의 {map_name} 지도</div>
                {/* <button className={ATCardNaverButtonStyle}>네이버 지도</button> */}
                <button name={"at_card_button"} className={ATCardNextButtonSyle}>
                    <Image className={ATCardNextImageStyle} src={NextArrow} alt="" priority={true}/>
                </button>
            </div>

            <div className={ATCardImageWrapperStyle}>
                {
                    images.map((data: any, i)=>{
                        return <Image priority unoptimized key={i} src={`https://images.weserv.nl/?url=${data.originUrl}&w=250&h=250&output=webp&q=80`} alt="" width={120} height={120} className={ATCardImageStyle} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="/>

                    })
                }
            </div>

            
            <div className={ATCardTextWrapperStyle}>
                <div className={ATCardTitleStyle}>{title}</div>
                <div className={ATCardAddressStyle}>{address}</div>
            </div>
            {/* <div className={ATCardDivider}></div> */}
                <div className={ATCardCategoryWrapperStyle}>
                    {
                        categories.map((data, i)=>{
                            return <div key={i} className={ATCardCategoryStyle}>{data}</div>
                        })
                    }
                </div>
                

           

            </Link>
        </motion.div>
        
    )
}

export default forwardRef(ATCard)