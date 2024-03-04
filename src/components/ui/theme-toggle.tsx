'use client';

import {useTheme} from "next-themes";
import React from "react";
import {SunMoon} from "lucide-react";
import {iconSizes} from "@/lib/constants";


const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();

  return (
    <span
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className={"mr-4 hover:bg-white transition-colors dark:bg-black bg-white  rounded-lg p-2.5 flex items-center justify-center animate-fade-in "}
    >
      <SunMoon className={" hover:text-black dark:text-white text-black"} size={iconSizes.sm}/>
    </span>
  );
};

export default ThemeToggle;