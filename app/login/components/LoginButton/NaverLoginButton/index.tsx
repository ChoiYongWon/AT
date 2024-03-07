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
      <div style={style} className={`${LoginButtonWrapperStyle} ${className}`}>
        <Image
          className={LoginButtonStyle}
          src={NaverLoginImage}
          alt=""
        ></Image>
      </div>
    </>
  );
};

export default NaverLoginButton;
