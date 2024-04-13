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
    
      <Link
        style={style}
        className={`${ButtonStyle} ${className}`}
        href={"/"}
      >
        <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
          <Image className={ButtonImageStyle} src={CancelImage} alt="x" />
        </motion.div>

      </Link>
    
  );
};

export default CancelButton;
