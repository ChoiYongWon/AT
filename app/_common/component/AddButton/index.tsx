"use client";

import Image from "next/image";
import AddImage from "../../../../public/images/AddButton.svg";
import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
import Link from "next/link";
import { motion } from "framer-motion";



const AddButton = () => {

  // const [isClicked, setClicked] = useState(false)

  return (
    <motion.div className={ButtonStyle} {...{whileTap: {scale: 0.96}}}
    // onAnimationComplete={(definition: Record<'scale', number>) => {
    //   if (definition.scale === 1 && isClicked) {
    //     onAnimationCompleteClick?.()
    //   }
    // }}
    // onClick={(e) => {
    //   setClicked(true)
    //   onClick?.(e)
    // }}
    >
      <Link className={ButtonLinkStyle} href={"/add"}>
        <Image className={ButtonImageStyle} src={AddImage} alt="+" />
      </Link>
    </motion.div>
    
  );
};

export default AddButton;
