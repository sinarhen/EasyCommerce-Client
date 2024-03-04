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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Info, List, LucideIcon, ShoppingBag, ShoppingCart} from "lucide-react";

const about: { title: string; href: string; description: string }[] = [
  {
    title: "Rules",
    href: "/rules",
    description:
      "Read about the rules and regulations that govern our platform.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us.",
  },
  {
    title: "FAQs",
    href: "/faq",
    description: "Find answers to frequently asked questions.",
  },
  {
    title: "Terms",
    href: "/terms",
    description: "Read our terms and conditions.",
  },
  {
    title: "Privacy",
    href: "/privacy",
    description: "Read our privacy policy.",
  },
  {
    title: "Security",
    href: "/security",
    description: "Read about our security measures.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Read our blog.",
  },
  {
    title: "Press",
    href: "/press",
    description: "Read about us in the press.",
  },
  {
    title: "Partners",
    href: "/partners",
    description: "Learn about our partners.",
  },
  {
    title: "Affiliates",
    href: "/affiliates",
    description: "Learn about our affiliate program.",
  },
  {
    title: "Feedback",
    href: "/feedback",
    description: "Give us feedback.",
  },
  {
    title: "Support",
    href: "/support",
    description: "Get support.",
  },
  {
    title: "Accessibility",
    href: "/accessibility",
    description: "Learn about our accessibility features.",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Learn about our pricing.",
  },
]

export function StoreNavbarNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList >
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black dark:text-white">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/store"
                  >
                    <ShoppingBag className="h-6 w-6" />
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
              <ListItem href="/store/about"  Icon={Info} title="About us">
                Learn about us.
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
