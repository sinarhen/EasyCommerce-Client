'use client'

import CategoryCard from "@/components/ui/category-card";
import React, { useEffect } from "react";
import {CategoryDto} from "@/types/product";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import {useParamsStore} from "@/hooks/use-params-store";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import apiFetcher from "@/actions/api";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";
import {getCategories} from "@/actions/products";
import {Cross, X} from "lucide-react";
import {iconSizes} from "@/lib/constants";

function useCategories(): UseQueryResult<CategoryDto[]> {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = await getCategories();
      return categories.categories;
    }
  });
}
export default function AnimatedCategories() {
  const { data: categories, isLoading, error } = useCategories();
  const [open, setOpen] = React.useState(false);
  const params = useParamsStore(state => ({
    addFilter: state.toggleFilter,
    categoryId: state.categoryId,
  }));

  if (isLoading) return (
    <CategoriesWrapper>
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
      <CategoryCardSkeleton />
    </CategoriesWrapper>
  )

  if (error){
    console.log(error)
    return (

      <div>
        Error occured while fetching categories
      </div>
    )
  }


  return (
    <>
      {params.categoryId?.length !== 0 && (
        <p className="font-semibold">
          Selected categories
        </p>
      )}
      <div className="flex gap-x-1 mb-1">
        {params.categoryId?.map(id => (
          <Button
            variant="outline"
            key={id}
            onClick={() => params.addFilter('categoryId', id)}
            className="group flex items-center gap-x-1"
          >
            {categories?.find((category) => category.id === id)?.name}
            <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
          </Button>
        ))}

      </div>
      <Collapsible open={open} onOpenChange={setOpen}>

        <CategoriesWrapper>
          { categories?.map((category: CategoryDto) => (
            <CategoryCard
              key={category.id} title={category.name}
              onClick={() => params.addFilter('categoryId', category.id)}
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