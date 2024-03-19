"use client";

import GoogleLoginButton from "../../component/LoginButton/GoogleLoginButton";
import KakaoLoginButton from "../../component/LoginButton/KakaoLoginButton";
import NaverLoginButton from "../../component/LoginButton/NaverLoginButton";

import { signIn } from "next-auth/react";
import { Divider, LoginButtonLayoutStyle } from "./style.css";

const LoginButtonGroup = () => {
  return (
    <>
      <GoogleLoginButton
        className={LoginButtonLayoutStyle}
        onClick={() => alert("추후 지원 예정")}
      ></GoogleLoginButton>
      <div className={Divider}></div>
      <KakaoLoginButton
        className={LoginButtonLayoutStyle}
        onClick={() => signIn("kakao", { callbackUrl: "/" })}
      ></KakaoLoginButton>
      <div className={Divider}></div>
      <NaverLoginButton
        // onClick={() => signIn("naver", { callbackUrl: "/" })}
        onClick={() => alert("추후 지원 예정")}
        className={LoginButtonLayoutStyle}
      ></NaverLoginButton>
    </>
  );
};

export default LoginButtonGroup;
