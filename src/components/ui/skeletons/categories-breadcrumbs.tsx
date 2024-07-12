'use client';

import {cn} from "@/lib/utils";
import {ProductCategoryDto} from "@/lib/_api/client";

export default function CategoriesBreadcrumbs({
  categories,
  onClick,
  className
                                              }: {
  categories: ProductCategoryDto[];
  onClick?: (category: ProductCategoryDto) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex text-gray-400", className)}>
      {categories.map((category, index) => (
        <button key={category.id}

              onClick={() => onClick && onClick(category)}>
          <span
            className=" hover:underline text-nowrap"
          >
            {category.name}

          </span>
          {index !== categories.length - 1 && " > "}

        </button>
      ))}
    </div>

  )
}