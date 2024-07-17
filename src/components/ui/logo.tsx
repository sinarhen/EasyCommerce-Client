import Link from "next/link";
import {Store} from "lucide-react";
import React from "react";

const Logo = () => (
  <Link href={"/"}>
    <span className="flex items-center ">
      <div
        className="animate-fade-in opacity-0"
      >
        <Store size={24}/>
      </div>
      <div
        className="animate-left-to-right ml-2 transition-all text-sm font-bold "
      >
        <span className="text-gradient animate-gradient">
          EasyCommerce
        </span>
      </div>
    </span>
  </Link>
);


export default Logo;