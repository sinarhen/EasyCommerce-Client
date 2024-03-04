'use client';

import Logo from "@/components/ui/logo";
import {motion} from "framer-motion";
import NavButton from "@/components/ui/nav-button";
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
      <div className="flex justify-between items-center w-full px-4 sm:px-16 md:px-8 lg:px-32 xl:px-72">
        <Logo/>

        <div className=" md:flex ml-9 hidden  gap-x-1.5">
          <StoreNavbarNavigation />
        </div>

        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: transitionDuration}}
          className="flex w-full px-9 justify-start">
          <StoreNavbarCommand/>

        </motion.div>
        <div className="flex md:hidden relative justify-end md:justify-start w-full items-center gap-x-6">
          <StoreNavbarDropdown items={navButtons}/>

        </div>
        <div className="md:flex hidden">
          {!authorized && (
            <div className="flex gap-x-4">
              <Button variant="ghost">
               <span className="text-gradient animate-gradient">
                Register
               </span>
              </Button>
              <Button variant="ghost">
                Login
              </Button>
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