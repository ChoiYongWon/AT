"use client";

import { motion } from "framer-motion";

type Props = {
  className: string;
  children: any;
  key: string;
};

const PageAnimateLeft = ({ children, className, key }: Props) => {
  return (
    <motion.div
      key={key}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 500,
      }}
      exit={{ x: "-100vw" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimateLeft;
