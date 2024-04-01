'use client'

import Image from "next/image";
import NaverLoginImage from "../../../../../public/images/NaverLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";

type Props = {
  className?: string;
  style?: any;
};

const NaverLoginButton = ({ className, style }: Props) => {
  return (
    <>
      <button
        onClick={() => alert("현재 카카오 로그인만 지원됩니다.")}
        style={style}
        className={`${LoginButtonWrapperStyle} ${className}`}
      >
        <Image
          className={LoginButtonStyle}
          src={NaverLoginImage}
          alt=""
        ></Image>
      </button>
    </>
  );
};

export default NaverLoginButton;
