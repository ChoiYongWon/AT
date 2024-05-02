import Image from "next/image";
import LoadingImage from "../../../public/images/Loading.svg"
import Link from "next/link";
import { ErrorHomeStyle, ErrorLayoutStyle, ErrorWrapperStyle } from "./style.css";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className={ErrorLayoutStyle}>
      <div className={ErrorWrapperStyle}>
        {children}
        <Link style={{marginTop: "16px"}} className={ErrorHomeStyle} href={"/"}>홈으로</Link>
      </div>
    </div>
    )
  }