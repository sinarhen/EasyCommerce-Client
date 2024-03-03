'use client';

import Logo from "@/components/ui/logo";
import {motion} from "framer-motion";
import NavButton from "@/components/ui/nav-button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";
import dynamic from "next/dynamic";
import {DollarSign, Info, Phone, ShoppingCart} from "lucide-react";
import {NavButtonProps} from "@/types/nav-button";
import StoreNavbarCommand from "./store-navbar-command";
import StoreNavbarDropdown from "@/app/store/components/store-navbar-dropdown";

const ThemeToggle = dynamic(() => import('../../../components/ui/theme-toggle'), {ssr: false})

const navButtons = [
  {href: "/store", icon: ShoppingCart, text: "Products", variant: "secondary"},
  {href: "/about", icon: Info, text: "About", variant: "ghost"},
  {href: "/seller", icon: DollarSign, text: "Seller", variant: "ghost"},
] as NavButtonProps[];

const transitionDuration = 1;

const buttonVariants = {
  hidden: {opacity: 0, x: 10},
  visible: {opacity: 1, x: 0},
};

export default function StoreNavbar() {
  return (
    <nav className="dark:bg-black fixed w-full z-50 flex items-center justify-between py-2  text-white bg-zinc-900">
      <div className="flex justify-between items-center w-full px-4 sm:px-16 md:px-16 lg:px-32 xl:px-72">

        <Logo/>
        <StoreNavbarCommand />
        <div></div>
        <div className="flex md:hidden relative justify-end items-center gap-x-6">
          <StoreNavbarDropdown />

        </div>
        <div className=" md:flex hidden  gap-x-1.5">
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
      <Tooltip>
        <TooltipTrigger>
          <ThemeToggle/>
        </TooltipTrigger>
        <TooltipContent>
          Toggle Theme
        </TooltipContent>
      </Tooltip>
    </nav>
  );
}