"use client";

import { motion } from "framer-motion";

type Props = {
  className: string;
  children: any;
  key: string;
};

const PageAnimateUp = ({ children, className, key }: Props) => {
  return (
    <motion.div
      key={key}
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 500,
      }}
      exit={{ y: "100vh" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimateUp;
