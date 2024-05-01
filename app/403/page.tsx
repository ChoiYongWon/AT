import Image from "next/image";
import LoadingImage from "../../../public/images/Loading.svg"
import { ForbiddenHomeStyle, ForbiddenLayoutStyle, ForbiddenNumberStyle, ForbiddenTextStyle, ForbiddenWrapperStyle } from "./style.css";
import Link from "next/link";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className={ForbiddenLayoutStyle}>
      <div className={ForbiddenWrapperStyle}>
        <div className={ForbiddenNumberStyle}>403</div>
        <div className={ForbiddenTextStyle}>권한이 없습니다.</div>
        <Link style={{marginTop: "16px"}} className={ForbiddenHomeStyle} href={"/"}>홈으로</Link>
      </div>
    </div>
    )
  }