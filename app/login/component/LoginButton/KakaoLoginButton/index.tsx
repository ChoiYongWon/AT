"use client";

import Image from "next/image";
import KakaoLoginImage from "../../../../../public/images/KakaoLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";

type Props = {
  className?: string;
  style?: any;
  onClick?: any;
  formAction?: any;
};

const KakaoLoginButton = ({ className, style, onClick, formAction }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
        formAction={formAction}
        style={style}
        className={`${LoginButtonWrapperStyle} ${className}`}
      >
        <Image
          className={LoginButtonStyle}
          src={KakaoLoginImage}
          alt=""
        ></Image>
      </button>
    </>
  );
};

export default KakaoLoginButton;
