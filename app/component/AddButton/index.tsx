"use client";

import Image from "next/image";
import AddImage from "../../../public/images/AddButton.png";
import { ButtonImageStyle, ButtonStyle } from "./style.css";
import { useRouter } from "next/navigation";

const AddButton = () => {
  const router = useRouter();

  return (
    <button className={ButtonStyle} onClick={() => router.push("/add")}>
      <Image className={ButtonImageStyle} src={AddImage} alt="+" />
    </button>
  );
};

export default AddButton;
