"use client";
import { motion } from "framer-motion";
import React from "react";

const AnimatedCard = ({ children, animate, initial }: any) => {
  return (
    <motion.main
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.main>
  );
};

export default AnimatedCard;
