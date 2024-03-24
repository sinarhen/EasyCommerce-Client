'use client';

import {ProductCategoryDto} from "@/types/product";

export default function CategoriesBreadcrumbs({
  categories,
  onClick
                                              }: {
  categories: ProductCategoryDto[];
  onClick?: (category: ProductCategoryDto) => void;
}) {
  return (
    <>
      {categories.map((category, index) => (
        <span key={category.id}
              onClick={() => onClick && onClick(category)}
              className="text-gray-400 text-nowrap">{category.name}{index !== categories.length - 1 && ","}</span>
      ))}
    </>

  )
}