'use client';

import {ProductCategoryDto} from "@/types/product";

export default function CategoriesBreadcrumbs({
  categories,
                                              }: {
  categories: ProductCategoryDto[]
}) {
  return (
    <>
      {categories.map((category, index) => (
        <span key={category.id}
              className="text-gray-400 text-nowrap">{category.name}{index !== categories.length - 1 && ","}</span>
      ))}
    </>

  )
}