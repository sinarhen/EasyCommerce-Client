'use client';

import React from "react";
import AnimatedLogo from "./animated-logo";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Info, Phone, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="dark:bg-black fixed w-full z-50 flex items-center justify-between py-2  text-white bg-zinc-900">
      <div className="flex justify-between items-center w-full px-4 sm:px-16 md:px-32 lg:px-64 xl:px-72">
        <Link href={"/"}>
          <AnimatedLogo />

        </Link>


        <div className="flex gap-x-1.5">
          <Link
            href={"/store"}
          >
            <Button
              size="sm"
              variant={"secondary"}
              className={"flex gap-x-2 items-center"}
            >
              <ShoppingCart size={12} />
              Store

            </Button>

          </Link>
          <Link
            href={"/store"}
          >
            <Button

              size="sm"
              variant={"ghost"}
              className="flex gap-x-2 items-center"
            >
              <Info size={12} />
              About
            </Button>

          </Link>
          <Link
            href={"/store"}
          >

            <Button
              size="sm"
              variant={"ghost"} className='flex gap-x-2 items-center'>
              <Phone size={12}/>
              Contact
            </Button>

          </Link>
        </div>

      </div>
      <div>

      </div>


    </nav>
  );
}