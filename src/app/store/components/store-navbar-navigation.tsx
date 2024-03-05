"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Info, List, LucideIcon, ShoppingBag, ShoppingCart, SunMoon} from "lucide-react";
import {motion} from "framer-motion";
import StoreNavbarCommand from "@/app/store/components/store-navbar-command";
import {useTheme} from "next-themes";

export function StoreNavbarNavigation() {
  const {theme, setTheme} = useTheme()
  return (
    <NavigationMenu>
      <NavigationMenuList >
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black dark:text-white">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <motion.div
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className="flex col-span-full w-full md:hidden justify-start">
                <StoreNavbarCommand/>

              </motion.div>
              <li className="row-span-4">

                <NavigationMenuLink asChild>


                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/store"
                  >
                    <ShoppingBag className="h-6 w-6"/>
                    <div className="mb-2 mt-4 text-lg text-gradient animate-gradient font-medium">

                      EasyCommerce
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your one-stop shop for all things commerce.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/store/products" Icon={ShoppingBag} title="Products">
                See all the products.
              </ListItem>
              <ListItem href="/store/collections" Icon={List} title="Collections">
                See all the collections of products.
              </ListItem>
              <ListItem href="/store/sellers" Icon={ShoppingCart} title="Sellers">
                See all the selling stores registered on our platform.
              </ListItem>
              <ListItem href="/store/about" Icon={Info} title="About us">
                Learn about us.
              </ListItem>
              <ListItem className="col-span-4" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} Icon={SunMoon} title="Toggle theme">
                Click to toggle the theme.
              </ListItem>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*<NavigationMenuItem>*/}
        {/*  <NavigationMenuTrigger className="text-black dark:text-white">About</NavigationMenuTrigger>*/}
        {/*  <NavigationMenuContent>*/}
        {/*    <ul className="grid w-[400px] gap-3 p-4 md:w-[550px] md:grid-cols-3 lg:grid-cols-4  lg:w-[700px] ">*/}
        {/*      {about.map((component) => (*/}
        {/*        <ListItem*/}
        {/*          key={component.title}*/}
        {/*          title={component.title}*/}
        {/*          href={component.href}*/}
        {/*        >*/}
        {/*          {component.description}*/}
        {/*        </ListItem>*/}
        {/*      ))}*/}
        {/*    </ul>*/}
        {/*  </NavigationMenuContent>*/}
        {/*</NavigationMenuItem>*/}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  Icon?: LucideIcon;
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm flex gap-x-1 items-center font-medium leading-none">
            {Icon && <Icon />} {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
