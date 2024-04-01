'use client'

import Image from "next/image";
import GoogleLoginImage from "../../../../../public/images/GoogleLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";

type Props = {
  className?: string;
  style?: any;
};

const GoogleLoginButton = ({ className, style }: Props) => {
  return (
    <>
      <button
        style={style}
        className={`${className} ${LoginButtonWrapperStyle} `}
        onClick={() => alert("현재 카카오 로그인만 지원됩니다.")}
      >
        <Image
          className={LoginButtonStyle}
          src={GoogleLoginImage}
          alt=""
        ></Image>
      </button>
    </>
  );
};

export default GoogleLoginButton;
