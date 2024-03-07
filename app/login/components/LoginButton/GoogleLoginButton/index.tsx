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
      <div style={style} className={`${className} ${LoginButtonWrapperStyle} `}>
        <Image
          className={LoginButtonStyle}
          src={GoogleLoginImage}
          alt=""
        ></Image>
      </div>
    </>
  );
};

export default GoogleLoginButton;
