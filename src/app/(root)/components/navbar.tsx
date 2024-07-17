import React from "react";
import {Info, Phone, ShoppingCart} from "lucide-react";
import NavButton from "../../../components/ui/nav-button";
import Logo from "../../../components/ui/logo";
import {NavButtonProps} from "@/types/nav-button";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import ThemeToggle from "@/components/ui/theme-toggle";


const navButtons = [
  {href: "/store", Icon: ShoppingCart, text: "Store", variant: "secondary"},
  {href: "/about", Icon: Info, text: "About", variant: "ghost"},
  {href: "/contact", Icon: Phone, text: "Contact", variant: "ghost"},
] as NavButtonProps[];


export default function Navbar() {
  return (
    <nav className="dark:bg-black fixed w-full z-50 flex items-center justify-between py-2  text-white bg-zinc-900">
      <div className="flex justify-between items-center w-full px-4 sm:px-16 md:px-32 lg:px-64 xl:px-72">
        <Logo/>
        <div className="flex gap-x-1.5">
          {navButtons.map((button, idx) => (
            <div
              key={idx}
              className={`animate-fade-in  opacity-0 `}
            >
              <NavButton {...button} />

            </div>
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