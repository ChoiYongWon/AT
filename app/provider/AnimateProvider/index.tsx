"use client";

import { motion, AnimatePresence } from "framer-motion";

const AnimateProvider = ({ children }: { children: any }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default AnimateProvider;
