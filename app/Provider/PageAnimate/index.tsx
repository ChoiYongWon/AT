"use client";

import { motion } from "framer-motion";

type Props = {
  className: string;
  children: any;
};

const PageAnimate = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimate;
