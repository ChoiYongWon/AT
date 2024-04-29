'use client'

import Image from "next/image";
import PrevImage from "../../../../public/images/PrevArrow.svg";
import NextImage from "../../../../public/images/NextArrow.svg";
import CancelImage from "../../../../public/images/CancelButton.svg";
import Search from "../../../../public/images/SearchIcon.svg";


import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle, CancelButtonImageStyle, SearchButtonImageStyle } from "./style.css";
import { motion } from "framer-motion";

type Props = {
  style?: any;
  className?: any;
  size: string
  type: 'next' | 'prev' | 'cancel' | 'search'
  onClick?: any
  disabled?: boolean
};

const IconButton = ({size, style, className, onClick, type, disabled }: Props) => {

  return (
    
      <button
        disabled={disabled}
        style={{
            width: size,
            height: size,
            ...style,

        }}
        className={`${ButtonStyle} ${className}`}
        onClick={onClick}
      >
        <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
            {type == 'next' ? <Image className={ButtonImageStyle} src={NextImage} alt="x" /> : <></>}
            {type == 'prev' ? <Image className={ButtonImageStyle} src={PrevImage} alt="x" /> : <></>}
            {type == 'cancel' ? <Image className={CancelButtonImageStyle} src={CancelImage} alt="x" /> : <></>}
            {type == 'search' ? <Image className={SearchButtonImageStyle} src={Search} alt="x" /> : <></>}

          
        </motion.div>

      </button>
    
  );
};

export default IconButton;
