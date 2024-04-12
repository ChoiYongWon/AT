"use client";

import { motion } from "framer-motion";

type Props = {
  className: string;
  children: any;
  key: string;
};

const PageAnimateRight = ({ children, className, key }: Props) => {
  return (
    <motion.div
      key={key}
      initial={{ x: "150vw" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 500,
      }}
      exit={{ x: "150vw" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimateRight;
