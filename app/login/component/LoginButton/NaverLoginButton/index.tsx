import Image from "next/image";
import NaverLoginImage from "../../../../../public/images/NaverLogin.png";
import { LoginButtonStyle, LoginButtonWrapperStyle } from "../style.css";

type Props = {
  className?: string;
  style?: any;
  onClick?: any;
};

const NaverLoginButton = ({ className, style, onClick }: Props) => {
  return (
    <>
      <button
        onClick={onClick}
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
