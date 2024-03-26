"use client";

import { motion } from "framer-motion";

type Props = {
  className: string;
  children: any;
  key: string;
};

const PageAnimateOpacity = ({ children, className, key }: Props) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimateOpacity;
