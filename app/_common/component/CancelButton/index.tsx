import Image from "next/image";
import CancelImage from "../../../../public/images/CancelButton.svg";
import { ButtonImageStyle, ButtonStyle } from "./style.css";
import Link from "next/link";

type Props = {
  style?: any;
  className?: any;
};

const CancelButton = ({ style, className }: Props) => {

  return (
    <Link
      style={style}
      className={`${ButtonStyle} ${className}`}
      href={"/"}
    >
      <Image className={ButtonImageStyle} src={CancelImage} alt="x" />
    </Link>
  );
};

export default CancelButton;
