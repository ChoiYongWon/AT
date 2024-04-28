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
import { BackButtonStyle, BackButtonWrapperStyle, CountStyle, ImageCarouselWrapperStyle, ImageStyle, NextButtonStyle, NextButtonWrapperStyle, PrevButtonStyle, PrevButtonWrapperStyle, SliderStyle, SwiperStyle,  } from "./style.css";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";


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
            <button className={BackButtonWrapperStyle} onClick={()=>router.back()}>
                <Image src={PrevArrow} alt="" className={BackButtonStyle}/>
            </button>
            <button className={NextButtonWrapperStyle} onClick={onNextClick} disabled={page == images.length - 1}>
                <Image src={NextArrow} alt="" className={NextButtonStyle}/>
            </button>
            <button className={PrevButtonWrapperStyle} onClick={onPrevClick} disabled={page == 0}>
                <Image src={PrevArrow} alt="" className={PrevButtonStyle}/>
            </button>
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
                                    <Image src={image.url} alt="" width={500} height={500} className={ImageStyle}/>
                                </SwiperSlide>)
                    })
                    }
            </Swiper>

        </div>
        
    )
}

export default ImageCarousel