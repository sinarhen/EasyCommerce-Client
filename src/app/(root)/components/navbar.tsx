import React from "react";
import AnimatedLogo from "./animated-logo";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="dark:bg-black flex items-center justify-between py-2 px-4 sm:px-16 md:px-32 lg:px-80 text-white bg-zinc-900">
      <Link href={"/"}>
        <AnimatedLogo />

      </Link>


    </nav>
  );
}