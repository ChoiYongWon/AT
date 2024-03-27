import { AnimatePresence, Reorder, useDragControls } from "framer-motion";
import Image from "next/image";
import {
  ImageAddButtonTitleStyle,
  ImageAddButtonWrapperStyle,
  ImageAddWrapper,
  ImageContainerStyle,
  ImageStyle,
  PreviewImageItemStyle,
} from "./style.css";
import ImageAddButton from "../../../../../public/images/ImageAddButton.svg";
import { useEffect, useRef } from "react";
import PreviewImageItem from "../PreviewImageItem";

type Props = {
  // children: any;
  previewImage: any;
  setPreviewImage: any;
  children: any;
};

const PreviewImage = ({ children, previewImage, setPreviewImage }: Props) => {
  const isDragging = useRef(false);

  return (
    <div className={ImageAddWrapper}>
      <input type="file" id="image-input" hidden />
      <label htmlFor="image-input" className={ImageAddButtonWrapperStyle}>
        <Image src={ImageAddButton} alt="+" />
        <div className={ImageAddButtonTitleStyle}>사진 찾기</div>
      </label>
      <Reorder.Group
        className={ImageContainerStyle}
        style={{ marginLeft: "10px" }}
        values={previewImage}
        onReorder={setPreviewImage}
        axis="x"
      >
        <AnimatePresence mode="popLayout">{children}</AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default PreviewImage;
