"use client";

import Image from "next/image";
import CancelImage from "../../../public/images/CancelButton.svg";
import { ButtonImageStyle, ButtonStyle } from "./style.css";
import { useRouter } from "next/navigation";

type Props = {
  style?: any;
  className?: any;
};

const CancelButton = ({ style, className }: Props) => {
  const router = useRouter();

  return (
    <button
      style={style}
      className={`${ButtonStyle} ${className}`}
      onClick={() => router.back()}
    >
      <Image className={ButtonImageStyle} src={CancelImage} alt="x" />
    </button>
  );
};

export default CancelButton;
