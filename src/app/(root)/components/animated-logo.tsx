'use client'

import { motion } from "framer-motion";
import { Store } from "lucide-react";
import React from "react";


const logoVariants = {
  hidden: { opacity: 0, x: -20},
  visible: { opacity: [0.05, 0.3, 0.5, 0.7, 1], x: 0 },

}

const logoTransition = {
  duration: 1,
  animation: "easeInOut",
  ease: "easeOut",
}

export default function AnimatedLogo() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={logoVariants}
      transition={logoTransition}
      className="flex items-center hover:text-gray-400 transition-colors justify-center w-12 h-12 bg-zinc-900 rounded-full"
    >

      <Store size={32} />
    </motion.div>
  );
}