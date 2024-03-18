import {CategoryDto} from "@/types/product";
import CategoryCard from "@/components/ui/category-card";
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

    className={cn("grid overflow-y-hidden mb-6 gap-y-2 lg:grid-cols-4 sm:grid-cols-2  overflow-x-auto gap-x-2", className)}>

    {children}
  </div>
);
export default CategoriesWrapper