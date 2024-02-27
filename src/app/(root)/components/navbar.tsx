import React from "react";
import {Info, Phone, ShoppingCart} from "lucide-react";
import NavButton from "./nav-button";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="dark:bg-black fixed w-full z-50 flex items-center justify-between py-2  text-white bg-zinc-900">
      <div className="flex justify-between items-center w-full px-4 sm:px-16 md:px-32 lg:px-64 xl:px-72">
        <Logo />
        <div className="flex gap-x-1.5">
          <NavButton href="/store" icon={ShoppingCart} text="Store" variant="secondary" />
          <NavButton href="/store" icon={Info} text="About" variant="ghost" />
          <NavButton href="/store" icon={Phone} text="Contact" variant="ghost" />
        </div>
      </div>
      <ThemeToggle />
    </nav>
  );
}