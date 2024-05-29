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
    
      <motion.button
        name="icon_button"
        aria-label="icon_button"
        disabled={disabled}
        style={{
            width: size,
            height: size,
            minWidth: size,
            minHeight: size,
            ...style,

        }}
        {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}
        className={`${ButtonStyle} ${className}`}
        onClick={onClick}
      >
        <div className={ButtonLinkStyle}>
            {type == 'next' ? <Image className={ButtonImageStyle} src={NextImage} alt="x" priority={true}/> : <></>}
            {type == 'prev' ? <Image className={ButtonImageStyle} src={PrevImage} alt="x" priority={true}/> : <></>}
            {type == 'cancel' ? <Image className={CancelButtonImageStyle} src={CancelImage} alt="x" priority={true}/> : <></>}
            {type == 'search' ? <Image className={SearchButtonImageStyle} src={Search} alt="x" priority={true}/> : <></>}

          
        </div>

      </motion.button>
    
  );
};

export default IconButton;
