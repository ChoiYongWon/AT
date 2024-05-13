import Image from "next/image";
import { LoadingImageStyle, LoadingLayoutStyle, LoadingTextStyle, LoadingWrapperStyle } from "./style.css";
import LoadingImage from "../../public/images/Loading.svg"

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className={LoadingLayoutStyle}>
      <div className={LoadingWrapperStyle}>
        <Image src={LoadingImage} className={LoadingImageStyle} alt=""/>
        <div className={LoadingTextStyle}>로딩중...</div>
      </div>
    </div>
    )
  }