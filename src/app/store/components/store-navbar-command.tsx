import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";
import {Archive, Bookmark, List, Settings, Sheet, ShoppingCart, Store, User} from "lucide-react";
import React, {useState} from "react";
import {cn} from "@/lib/utils";

const commandGroups = [
  {
    heading: "Products",
    commands: [
      {icon: ShoppingCart, text: "Products", href: "/store/products"},
      {icon: Archive, text: "Collections", href: "/store/collections"},
      {icon: List, text: "Categories", href: "/store/categories"},
      {icon: ShoppingCart, text: "Stores", href: "/store/stores"},
    ]
  },
  {
    heading: "User",
    commands: [
      {icon: User, text: "Profile"},
      {icon: Sheet, text: "Orders"},
      {icon: Bookmark, text: "Wish List"},
      {icon: Settings, text: "Settings"},
    ]
  },
  {
    heading: "Seller",
    commands: [
      {icon: Store, text: "My Stores"},
    ]
  },
];

const StoreNavbarCommand = ({
                              className
                            }: {
  className?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Command className={cn("rounded-md border h-9 w-full shadow-md", className)}>
      <CommandInput className="w-full h-9" onBlurCapture={() => setIsFocused(false)} onFocus={() => {
        setIsFocused(true)
      }} placeholder="Type a command or search..."/>
      <CommandList hidden={!isFocused}
                   className='absolute scroll-m-0 top-12 rounded-md dark:bg-black bg-white w-full border  sm:w-[200px]'>
        <CommandEmpty>No results found.</CommandEmpty>
        {commandGroups.map((group, groupIdx) => (
          <React.Fragment key={groupIdx}>
            <CommandGroup heading={group.heading}>
              {group.commands.map((command, commandIdx) => (
                <CommandItem key={commandIdx}>
                  <command.icon className="mr-2 h-4 w-4"/>
                  <span>{command.text}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            {groupIdx < commandGroups.length - 1 && <CommandSeparator/>}
          </React.Fragment>
        ))}
      </CommandList>
    </Command>
  )
}

export default StoreNavbarCommand;