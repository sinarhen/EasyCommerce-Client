'use client'

import CategoryCard from "@/components/ui/category-card";
import React, { useEffect } from "react";
import {CategoryDto} from "@/types/product";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";

export default function AnimatedCategories({
  categories
                                           }: {
  categories: CategoryDto[]
}) {
  console.log(categories)
  if (!categories || categories.length === 0) return (
    <div className="w-full h-full flex justify-center items-center">
      No categories
    </div>
  )
  return (
    <Collapsible>
        <div className="grid overflow-y-hidden mb-6 gap-y-4 lg:grid-cols-4 grid-cols-2  overflow-x-auto gap-x-2">

          {categories?.map((category: CategoryDto) => (
            <CategoryCard key={category.id} title={category.name}
                          description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>
          ))}
        </div>

      <CollapsibleContent>
        <div className="grid overflow-y-hidden mb-6 gap-y-4 lg:grid-cols-4 grid-cols-2  overflow-x-auto gap-x-2">

          {categories?.map((category: CategoryDto) => (
            <CategoryCard key={category.id} title={category.name}
                          description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>
          ))}
        </div>
      </CollapsibleContent>
      <CollapsibleTrigger>
        <div className="w-full">
          <button className="w-full text-center text-gray-500 font-semibold">
            Show more
          </button>
        </div>
      </CollapsibleTrigger>

    </Collapsible>

)
}