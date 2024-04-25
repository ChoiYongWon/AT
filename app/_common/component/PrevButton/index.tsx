'use client'

import Image from "next/image";
import PrevImage from "../../../../public/images/PrevArrow.svg";
import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  style?: any;
  className?: any;
};

const PrevButton = ({ style, className }: Props) => {

  const router = useRouter()

  return (
    
      <button
        style={style}
        className={`${ButtonStyle} ${className}`}
        onClick={()=>router.back()}
      >
        <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
          <Image className={ButtonImageStyle} src={PrevImage} alt="x" />
        </motion.div>

      </button>
    
  );
};

export default PrevButton;
