import { AnimatePresence, Reorder, motion } from "framer-motion";
import Image from "next/image";
import {
  ImageAddButtonTitleStyle,
  ImageAddButtonWrapperStyle,
  ImageAddWrapper,
  ImageContainerStyle,
} from "./style.css";
import ImageAddButton from "../../../../../public/images/ImageAddButton.svg";

type Props = {
  previewImage: any;
  setPreviewImage: any;
  children: any;
};

const PreviewImageList = ({
  children,
  previewImage,
  setPreviewImage,
}: Props) => {
  return (
    <div className={ImageAddWrapper}>
      <input type="file" id="image-input" hidden />
      <Reorder.Group
        className={ImageContainerStyle}
        style={{ overflow: "visible" }}
        values={previewImage}
        onReorder={setPreviewImage}
        axis="x"
      >
        <AnimatePresence mode="popLayout">
          {children}
          <motion.label
            key={"add"}
            htmlFor="image-input"
            className={ImageAddButtonWrapperStyle}
            layout
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "just" }}
          >
            <Image src={ImageAddButton} alt="+" />
            <div className={ImageAddButtonTitleStyle}>사진 찾기</div>
          </motion.label>
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default PreviewImageList;
