'use client'

import Image from "next/image";
import CancelImage from "../../../../public/images/CancelButton.svg";
import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  style?: any;
  className?: any;
};

const CancelButton = ({ style, className }: Props) => {

  const router = useRouter()

  return (
    
      <button
        style={style}
        className={`${ButtonStyle} ${className}`}
        onClick={()=>router.back()}
      >
        <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
          <Image className={ButtonImageStyle} src={CancelImage} alt="x" />
        </motion.div>

      </button>
    
  );
};

export default CancelButton;
