'use client';

import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import React from "react";
import {SunMoon} from "lucide-react";
import {iconSizes} from "@/lib/constants";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      variant="ghost" className={"mr-4"}
    >
      <SunMoon className={"hover:text-black text-white"} size={iconSizes.sm}/>
    </Button>
  );
};

export default ThemeToggle;