import React from "react";
import {cn} from "@/lib/utils";

const CategoriesWrapper = ({
                             children,
                             className
                           }: {
  children: React.ReactNode;
  className?: string
}) => (
  <div

    className={cn("grid overflow-y-hidden mb-6 gap-2.5 lg:grid-cols-4 sm:grid-cols-2  overflow-x-auto ", className)}>

    {children}
  </div>
);
export default CategoriesWrapper