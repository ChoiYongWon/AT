"use client";

import Image from "next/image";
import KakaoLoginImage from "../../../../../public/images/KakaoLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast/headless";

type Props = {
  className?: string;
  style?: any;
  formAction?: any;
};

const KakaoLoginButton = ({ className, style, formAction }: Props) => {

  const [disable, setDisable] = useState(false)

  useEffect(()=>{
    setDisable(false)
  }, [])

  const onClick = () => {
    setDisable(true)
    signIn("kakao", { callbackUrl: "/" }).catch(()=>{
      toast.error("로그인 오류")
      setDisable(false)
    })
  }

  return (
    <>
      <button
        disabled={disable}
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
