import * as React from "react";
import {LucideIcon} from "lucide-react";
import {NavigationMenuLink} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";

export type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  Icon?: LucideIcon;
};

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({className, title, Icon, children, ...props}, ref) => {
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
            {Icon && <Icon/>} {title}
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
