import {cn} from "@/lib/utils";
import React from "react";

const GridBackground = (
  {children, className} : {
    children: React.ReactNode,
    className?: string

  }
) => {
  return (
    <div
      className={"dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]" + cn("duration-700 transition-colors flex items-center h-screen w-full  dark:bg-black bg-white relative ")}
    >
      {children}
    </div>
  )
}

export default GridBackground;