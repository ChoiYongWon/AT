"use client";

import Image from "next/image";
import AddImage from "../../../../public/images/AddButton.svg";
import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
import Link from "next/link";
import { motion } from "framer-motion";



const AddButton = () => {

  // const [isClicked, setClicked] = useState(false)

  return (
    
    // onAnimationComplete={(definition: Record<'scale', number>) => {
    //   if (definition.scale === 1 && isClicked) {
    //     onAnimationCompleteClick?.()
    //   }
    // }}
    // onClick={(e) => {
    //   setClicked(true)
    //   onClick?.(e)
    // }}
    
      <Link className={ButtonStyle} href={"/add"}>
        <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
          <Image className={ButtonImageStyle} src={AddImage} alt="+" />
        </motion.div>
      </Link>
   
    
  );
};

export default AddButton;
