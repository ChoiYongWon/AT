'use client'

import { useRecoilValue } from "recoil";
import { atDataState } from "../../recoil";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';

import NextArrow from "../../../../../public/images/NextArrow.svg"
import PrevArrow from "../../../../../public/images/PrevArrow.svg"


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import { BackButtonStyle, BackButtonWrapperStyle, CountStyle, ImageCarouselWrapperStyle, ImageStyle, NextButtonWrapperStyle, PrevButtonWrapperStyle, SliderStyle, SwiperStyle,  } from "./style.css";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import IconButton from "@/app/_common/component/IconButton";
import ImageWithFallback from "@/app/_common/component/ImageWithFallback";


type Props = {
    className?: any;
    style?: any;
}

const ImageCarousel = ({
    className, style
}: Props) => {

    const { images } = useRecoilValue(atDataState)
    const [page, setPage] = useState(0)
    const swiper = useRef<any>(null)
    const router = useRouter()

    const onNextClick = (e: any) =>{
        e.preventDefault()
        swiper?.current?.slideNext()
    }

    const onPrevClick = (e: any) =>{
        e.preventDefault()
        swiper?.current?.slidePrev()
    }

    return (
        <div className={ImageCarouselWrapperStyle}>
            <div className={CountStyle}>
                {page+1} / {images.length}
            </div>

            <IconButton size="34px" className={BackButtonWrapperStyle} type="prev" onClick={()=>router.back()}/>
            <IconButton size="30px" className={NextButtonWrapperStyle} type="next" disabled={page == images.length - 1} onClick={onNextClick}/>
            <IconButton size="30px" className={PrevButtonWrapperStyle} type="prev" disabled={page == 0} onClick={onPrevClick}/>
            
            <Swiper
                modules={[A11y]}
                className={`${SwiperStyle} ${className}`} 
                style={style}
                pagination={{ clickable: true }}
                // slidesPerView={3}
                onSlideChange={(e) => setPage(e.activeIndex)}
                onSwiper={(currentSwiper) => swiper.current = currentSwiper}
                >
                    {
                    images.map((image, i)=>{
                        return  (<SwiperSlide className={SliderStyle} key={i}>
                                    <ImageWithFallback priority unoptimized originUrl={image.originUrl} compressUrl={image.compressUrl} alt="" width={500} height={500} className={ImageStyle} placeholder="blur" blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="/>
                                </SwiperSlide>)
                    })
                    }
            </Swiper>

        </div>
        
    )
}

export default ImageCarousel