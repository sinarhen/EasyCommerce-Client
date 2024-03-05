'use client';

import Logo from "@/components/ui/logo";
import {motion} from "framer-motion";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";
import dynamic from "next/dynamic";
import {DollarSign, Info, Phone, ShoppingCart, User} from "lucide-react";
import {NavButtonProps} from "@/types/nav-button";
import StoreNavbarCommand from "./store-navbar-command";
import {StoreNavbarNavigation} from "@/app/store/components/store-navbar-navigation";
import {Button} from "@/components/ui/button";

const ThemeToggle = dynamic(() => import('@/components/ui/theme-toggle'), {ssr: false})
const StoreNavbarDropdown = dynamic(() => import('@/app/store/components/store-navbar-dropdown'), {ssr: false})

const navButtons = [
  {href: "/store", Icon: ShoppingCart, text: "Products", variant: "secondary"},
  {href: "/about", Icon: Info, text: "About", variant: "ghost"},
  {href: "/seller", Icon: DollarSign, text: "Seller", variant: "ghost"},
  {href: "/me", Icon: User, text: "Profile", variant: "ghost"},
] as NavButtonProps[];

const transitionDuration = 1;

const buttonVariants = {
  hidden: {opacity: 0, x: 10},
  visible: {opacity: 1, x: 0},
};

export default function StoreNavbar() {

  const authorized = false; // TODO: replace with actual auth check
  return (
    <nav className="dark:bg-black fixed w-full z-50 flex py-2  text-white bg-zinc-900">
      <div className="flex justify-between md:flex-row items-center w-full px-4 sm:px-16 md:px-8 lg:px-32 xl:px-72">
        <Logo/>

        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: transitionDuration - 0.2}}
          className=" flex ml-9 gap-x-1.5">
          <StoreNavbarNavigation />
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: transitionDuration, delay: 0.2}}
          className="hidden md:flex w-full px-9 justify-start">
          <StoreNavbarCommand/>

        </motion.div>
        <div className="flex">
          {!authorized && (
            <div className="flex gap-x-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                transition={{duration: transitionDuration, delay: 0.4}}
                >

                <Button className="hidden sm:flex" variant="ghost">
                 <span className="text-gradient animate-gradient">
                  Register
                 </span>
                </Button>

              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                transition={{duration: transitionDuration, delay: 0.6}}
                >

                <Button variant="ghost">
                  Login
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <div className="md:absolute hidden">
        <Tooltip>
          <TooltipTrigger>
            <ThemeToggle/>
          </TooltipTrigger>
          <TooltipContent>
            Toggle Theme
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
}