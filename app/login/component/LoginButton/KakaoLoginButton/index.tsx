"use client";

import Image from "next/image";
import KakaoLoginImage from "../../../../../public/images/KakaoLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";
import { signIn } from "next-auth/react";

type Props = {
  className?: string;
  style?: any;
  formAction?: any;
};

const KakaoLoginButton = ({ className, style, formAction }: Props) => {
  return (
    <>
      <button
        onClick={() => signIn("kakao", { callbackUrl: "/" })}
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
