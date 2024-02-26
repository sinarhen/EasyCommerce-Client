'use client'

import React from "react";
import {Store} from "lucide-react"
import Link from "next/link";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: { opacity: 0, x: -20},
  visible: { opacity: [0.05, 0.3, 0.5, 0.7, 1], x: 0 },

}

const logoTransition = {
  duration: 1,
  animation: "easeInOut",
  ease: "easeOut",
}

export default function Navbar() {
  return (
    <nav className="dark:bg-black flex items-center justify-between py-3 px-4 sm:px-16 md:px-32 lg:px-80 text-white bg-zinc-900">
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        transition={logoTransition}
      >
        <Link href={"/"}>
          <Store className={"hover:text-gray-400 transition-colors cursor-pointer"}/>

        </Link>

      </motion.div>

    </nav>
  );
}