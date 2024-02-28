'use client';


import {motion} from "framer-motion";
import {Store} from "lucide-react";
import React from "react";

const logoVariants = {
  hidden: {opacity: 0, x: -20},
  visible: {opacity: [0.05, 0.3, 0.5, 0.7, 1], x: 0},
};

const textVariants = {
  hidden: {x: -10, opacity: 0},
  visible: {x: 0, opacity: 1},
};

const transitionDuration = 1;

const logoTransition = {
  duration: transitionDuration,
  animation: "easeInOut",
  ease: "easeOut",
};

const textTransition = {
  delay: transitionDuration - 0.3,
  duration: 0.5,
  type: "spring",
  stiffness: 120,
};

export default function AnimatedLogo() {
  return (
    <span className="flex items-center ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
        transition={logoTransition}
      >
        <Store size={24}/>
      </motion.div>
      <motion.div
        className="text-gradient ml-2 transition-all text-sm font-bold animate-gradient"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={textTransition}
      >
        EasyComm
      </motion.div>
    </span>
  );
}