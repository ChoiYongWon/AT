import Image from "next/image";
import GoogleLoginImage from "../../../../../public/images/GoogleLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";

type Props = {
  className?: string;
  style?: any;
  onClick?: any;
};

const GoogleLoginButton = ({ className, style, onClick }: Props) => {
  return (
    <>
      <button
        style={style}
        className={`${className} ${LoginButtonWrapperStyle} `}
        onClick={onClick}
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
