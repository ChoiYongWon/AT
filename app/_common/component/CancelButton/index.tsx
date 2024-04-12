'use client'

import Image from "next/image";
import CancelImage from "../../../../public/images/CancelButton.svg";
import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  style?: any;
  className?: any;
};

const CancelButton = ({ style, className }: Props) => {

  return (
    <motion.div className={ButtonStyle} {...{whileTap: {scale: 0.96}}}>
      <Link
        style={style}
        className={`${ButtonLinkStyle} ${className}`}
        href={"/"}
      >
        <Image className={ButtonImageStyle} src={CancelImage} alt="x" />
      </Link>
    </motion.div>
    
  );
};

export default CancelButton;
