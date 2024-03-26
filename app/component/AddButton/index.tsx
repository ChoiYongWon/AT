"use client";

import Image from "next/image";
import AddImage from "../../../public/images/AddButton.svg";
import { ButtonImageStyle, ButtonStyle } from "./style.css";
import Link from "next/link";

const AddButton = () => {
  return (
    <Link className={ButtonStyle} href={"/add"}>
      <Image className={ButtonImageStyle} src={AddImage} alt="+" />
    </Link>
  );
};

export default AddButton;
