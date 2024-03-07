import Image from "next/image";
import KakaoLoginImage from "../../../../../public/images/KakaoLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";

type Props = {
  className?: string;
  style?: any;
};

const KakaoLoginButton = ({ className, style }: Props) => {
  return (
    <>
      <div style={style} className={`${LoginButtonWrapperStyle} ${className}`}>
        <Image
          className={LoginButtonStyle}
          src={KakaoLoginImage}
          alt=""
        ></Image>
      </div>
    </>
  );
};

export default KakaoLoginButton;
