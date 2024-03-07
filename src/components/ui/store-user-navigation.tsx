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
import {Bookmark, Info, List, LucideIcon, Package, ShoppingBag, ShoppingCart, Store, SunMoon, User} from "lucide-react";
import {ListItem} from "@/components/ui/list-item";
import StoreNavbarUser from "@/components/ui/store-navbar-user";
import useAuth from "@/hooks/use-auth";
import {useTheme} from "next-themes";

export function StoreUserNavigation() {

  const {user} = useAuth();
  const {theme, setTheme} = useTheme()
  return (
    <NavigationMenu alignTo="end">
      <NavigationMenuList >
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-gray-100 dark:hover hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent ">
            <StoreNavbarUser />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 w-full gap-3 p-4 sm:w-[270px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">

                <NavigationMenuLink asChild>


                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/me"
                  >
                    <User className="h-6 w-6"/>
                    <div className="mb-2 mt-4 text-lg text-gradient animate-gradient font-medium">

                      Your profile
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Manage your profile.
                    </p>
                    <p>
                      Balance: <span className="text-gradient animate-gradient">$334.00</span>
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/me/orders" Icon={Package} title="Orders">
                See all the orders.
              </ListItem>
              <ListItem href="/me/wishlist" Icon={Bookmark} title="Wishlist">
                Favorite products.
              </ListItem>
              {user?.roles.includes("Seller") && (
                <ListItem href="/me/seller" Icon={Store} title="Seller">
                  Manage your stores.
                </ListItem>
                )}
              {user?.roles.includes("Admin") && (
                <ListItem href="/me/admin" Icon={ShoppingCart} title="Admin">
                  Admin panel.
                </ListItem>
              )}
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
