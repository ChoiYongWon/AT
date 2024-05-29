"use client";

import Image from "next/image";
import AddImage from "../../../../public/images/AddButton.svg";
import { ButtonImageStyle, ButtonLinkStyle, ButtonStyle } from "./style.css";
// import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



const AddButton = () => {

  const router = useRouter()

  useEffect(()=>{
    router.prefetch("/add");
  }, [router])

  return (
      <button name={"add_button"} className={ButtonStyle} onClick={()=>router.push("/add")}>
        <motion.div className={ButtonLinkStyle} {...{whileTap: {scale: 0.9, transition: { duration: 0.08 }}}}>
          <Image className={ButtonImageStyle} src={AddImage} alt="+" priority/>
        </motion.div>
      </button>
   
    
  );
};

export default AddButton;
