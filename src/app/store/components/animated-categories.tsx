'use client'

import CategoryCard from "@/components/ui/category-card";
import React, { useEffect } from "react";
import {CategoryDto} from "@/types/product";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import {useParamsStore} from "@/hooks/use-params-store";
import {getCategories} from "@/actions/products";

export default function AnimatedCategories() {
  const [categories, setCategories] = React.useState<CategoryDto[]>([]);
  const [open, setOpen] = React.useState(false);
  const params = useParamsStore(state => ({
    addFilter: state.addFilter,
    categoryId: state.categoryId,
  }));

  useEffect(() => {
    getCategories().then(
      (data) => {
        setCategories(data.categories)
      }
    );

  }, []);

  return (
    <>
      {params.categoryId?.map(id => (
        <Button
          key={id}
        >
          {categories.find((category) => category.id === id)?.name}
        </Button>
      ))}
      <Collapsible open={open} onOpenChange={setOpen}>

        <CategoriesWrapper>
          {categories?.map((category: CategoryDto) => (
            <CategoryCard
              key={category.id} title={category.name}
              description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>
          ))}
        </CategoriesWrapper>

        <CollapsibleContent>
          <CategoriesWrapper>
              {categories?.map((category: CategoryDto) => (
                <CategoryCard
                  key={category.id} title={category.name}
                  description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>
              ))}
          </CategoriesWrapper>
        </CollapsibleContent>
        <div className="w-full flex justify-center">
          <Button variant={"ghost"} onClick={() => setOpen(!open)}>{open ? 'Show less' : 'Show more'}</Button>
        </div>

      </Collapsible>

    </>

)
}