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
  image: any;
  setImage: any;
  onImageUpload: any;
  children: any;
  style?: any;
};

const PreviewImageList = ({ children, image, setImage, onImageUpload, style}: Props) => {
  return (
    <div className={ImageAddWrapper} style={style}>
      <input type="file" id="image-input" hidden onChange={onImageUpload} multiple={true} accept=".jpg, .jpeg, .png, .webp" />
      <Reorder.Group className={ImageContainerStyle} style={{ overflow: "visible" }} values={image} onReorder={setImage} axis="x">
        <AnimatePresence mode="popLayout">
          {children}
          <motion.label key={"add"} htmlFor="image-input" className={ImageAddButtonWrapperStyle} layout animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "just" }} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
            <Image src={ImageAddButton} alt="+" />
            <div className={ImageAddButtonTitleStyle}>사진 찾기</div>
          </motion.label>
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default PreviewImageList;
