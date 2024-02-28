'use client'
import React from "react";
import {Info, Phone, ShoppingCart} from "lucide-react";
import NavButton from "./nav-button";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import {NavButtonProps} from "@/types/nav-button";
import { motion } from "framer-motion";



const navButtons = [
  { href: "/store", icon: ShoppingCart, text: "Store", variant: "secondary" },
  { href: "/about", icon: Info, text: "About", variant: "ghost" },
  { href: "/contact", icon: Phone, text: "Contact", variant: "ghost" },
] as NavButtonProps[];

const transitionDuration = 1;

const buttonVariants = {
  hidden: {opacity: 0, x: 10},
  visible: {opacity: 1, x: 0},
};

export default function Navbar() {
  return (
    <nav className="dark:bg-black fixed w-full z-50 flex items-center justify-between py-2  text-white bg-zinc-900">
      <div className="flex justify-between items-center w-full px-4 sm:px-16 md:px-32 lg:px-64 xl:px-72">
        <Logo />
        <div className="flex gap-x-1.5">
          {navButtons.map((button, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{delay: idx * 0.2, duration: transitionDuration}}
            >
              <NavButton {...button} />

            </motion.div>
            ))}
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}