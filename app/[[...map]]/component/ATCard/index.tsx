import { forwardRef } from "react"
import { ATCardAddressStyle, ATCardCategoryStyle, ATCardCategoryWrapperStyle, ATCardDivider, ATCardIDStyle, ATCardImageStyle, ATCardImageWrapperStyle, ATCardInfoWrapperStyle, ATCardNaverButtonStyle, ATCardTextWrapperStyle, ATCardTitleStyle, ATCardWrapperStyle } from "./style.css"
import Image from "next/image"
import { motion } from "framer-motion"

type Props = {
    className ?: any
    title: string,
    at_id: string,
    map_name: string,
    images: any[],
    address: string,
    categories: string[]
}

const ATCard = ({title, at_id, map_name, images, address, categories, className}: Props) => {

    return (
        <div className={ATCardWrapperStyle}>
            <div className={ATCardInfoWrapperStyle}>
                <div className={ATCardIDStyle}>@ {at_id}의 {map_name} 지도</div>
                <button className={ATCardNaverButtonStyle}>네이버 지도</button>
            </div>

            <div className={ATCardImageWrapperStyle}>
                {
                    images.map((data: any, i)=>{
                        return <Image key={i} src={data} alt="" width={120} height={120} className={ATCardImageStyle}/>
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
                

           

        </div>
    )
}

export default ATCard