"use client";

import Image from "next/image";
import { TitleStyle } from "./style.css";
import ImageAddButton from "../../../../public/images/ImageAddButton.svg";
import { useState } from "react";
import { AnimatePresence, Reorder, motion } from "framer-motion";
import PreviewImage from "./PreviewImage";

type Props = {
  className?: any;
  style?: any;
};

const removePreviewImage = (arr: any, url: string) => {
  const i = arr.indexOf(url);
  if (i > -1) arr.splice(i, 1);
};

const UploadForm = ({ className, style }: Props) => {
  const [previewImage, setPreviewImage] = useState([
    "https://github.com/ChoiYongWon/AT/assets/40623433/645f8238-ea27-4b02-9d64-1916d69ca560",
    "https://github.com/ChoiYongWon/AT/assets/40623433/2d9eaa62-43d3-4758-9b23-7743487a1412",
    "https://github.com/ChoiYongWon/AT/assets/40623433/6cc779f2-e6f9-494c-b31d-12aa475152a6",
  ]);

  return (
    <form className={className} style={style}>
      <div className={TitleStyle} style={{ marginBottom: "10px" }}>
        사진 추가
      </div>
      <PreviewImage
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        removePreviewImage={removePreviewImage}
      ></PreviewImage>

      {/* <div>
        <div className={TitleStyle}>카테고리</div>
        <input type="text" />
        <ul></ul>
      </div>

      <div>
        <div className={TitleStyle}>장소 이름</div>
        <input type="text" />
      </div>

      <div>
        <div className={TitleStyle}>자세한 설명</div>
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </div> */}
    </form>
  );
};

export default UploadForm;
