import { motion } from "framer-motion";
import {
  CategoryDeleteButtonStyle,
  CategoryDeleteImageStyle,
  CategoryStyle,
} from "./style.css";
import Image from "next/image";
import CancelButton from "../../../../../../public/images/CancelButtonWhite.svg";
import { forwardRef } from "react";

type Props = {
  categoryName: string;
  onDeleteClick: any;
};

const CategoryItem = ({ categoryName, onDeleteClick }: Props, ref: any) => {
  return (
    <motion.div ref={ref} className={CategoryStyle} layout animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.1, opacity: 0 }} transition={{ type: "just", duration: 0.2 }} key={categoryName}>
      {categoryName}
      <div className={CategoryDeleteButtonStyle} onClick={onDeleteClick}>
        <Image className={CategoryDeleteImageStyle} src={CancelButton} alt="x"/>
      </div>
    </motion.div>
  );
};

export default forwardRef(CategoryItem);
