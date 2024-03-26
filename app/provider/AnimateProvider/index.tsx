"use client";

import { motion, AnimatePresence } from "framer-motion";

const AnimateProvider = ({ children }: { children: any }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default AnimateProvider;
