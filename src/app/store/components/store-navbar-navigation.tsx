"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Info, List, ShoppingBag, ShoppingCart, SunMoon} from "lucide-react";
import StoreNavbarCommand from "@/app/store/components/store-navbar-command";
import {useTheme} from "next-themes";
import {ListItem} from "@/components/ui/list-item"

export function StoreNavbarNavigation() {
  const {theme, setTheme} = useTheme()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black dark:text-white">Navigation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className="grid grid-cols-1 w-full gap-3 p-4 sm:w-[270px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div
                className="flex col-span-full   w-full md:hidden justify-start">
                <StoreNavbarCommand/>

              </div>
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
              <ListItem className="col-span-4" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        Icon={SunMoon} title="Toggle theme">
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
