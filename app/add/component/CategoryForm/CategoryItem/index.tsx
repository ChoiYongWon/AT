import { motion } from "framer-motion";
import {
  CategoryDeleteButtonStyle,
  CategoryDeleteImageStyle,
  CategoryStyle,
  CategoryTextStyle,
} from "./style.css";
import Image from "next/image";
import CancelButton from "../../../../../public/images/CancelButtonWhite.svg";
import { forwardRef } from "react";

type Props = {
  categoryName: string;
  onDeleteClick: any;
};

const CategoryItem = ({ categoryName, onDeleteClick }: Props, ref: any) => {
  return (
    <motion.div ref={ref} className={CategoryStyle} onClick={onDeleteClick} layout animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.1, opacity: 0 }} transition={{ type: "just", duration: 0.2 }} key={categoryName} {...{ whileTap: { scale: 0.9, transition: { duration: 0.08 } } }}>
      <div className={CategoryTextStyle}>
        {categoryName}
      </div>
      <div className={CategoryDeleteButtonStyle}>
        <Image className={CategoryDeleteImageStyle} src={CancelButton} alt="x"/>
      </div>
    </motion.div>
  );
};

export default forwardRef(CategoryItem);
