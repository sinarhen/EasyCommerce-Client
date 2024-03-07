"use client"

import * as React from "react"

import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Menu} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {NavButtonProps} from "@/types/nav-button";
import {useTheme} from "next-themes";

export default function StoreNavbarDropdown({
                                              items,
                                            }: {
  items: NavButtonProps[]
}) {
  const {theme, setTheme} = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="text-sm font-bold flex items-center gap-x-0.5"><Menu size={iconSizes.md}/>Menu</Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {items.map((item, idx) => (
          <DropdownMenuItem className="gap-x-2 items-center" key={idx}>
            <item.Icon size={iconSizes.sm}/>
            {item.text}</DropdownMenuItem>
        ))}
        <DropdownMenuSeparator/>
        <DropdownMenuCheckboxItem
          checked={theme == "dark"}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >Dark Mode</DropdownMenuCheckboxItem>

      </DropdownMenuContent>

    </DropdownMenu>

  )
}
