'use client'

import CategoryCard from "@/components/ui/category-card";
import React, {useEffect, useState} from "react";
import {CategoryDto} from "@/types/product";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import {useParamsStore} from "@/hooks/use-params-store";
import {useMutation, useQuery, UseQueryResult} from "@tanstack/react-query";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";
import {getCategories} from "@/actions/products";
import {X} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {AnimatePresence, motion} from "framer-motion";
import {shallow} from "zustand/shallow";

function useCategories(): UseQueryResult<CategoryDto[]>  {

  const query = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = await getCategories();
      return categories.categories;
    }
  });

  return { ...query};
}
export default function AnimatedCategories() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryDto | null>(null);

  const { data: categories, isLoading, error, } = useCategories();
  const [open, setOpen] = React.useState(false);
  const params = useParamsStore(state => ({
    toggleFilter: state.toggleFilter,
    categoryId: state.categoryId,
  }), shallow);


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
            onClick={() => params.toggleFilter('categoryId', id)}
            className="group flex items-center gap-x-1"
          >
            {categories?.find((category) => category.id === id)?.name}
            <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
          </Button>
        ))}

      </div>
      <Collapsible open={open} onOpenChange={setOpen}>

        <CategoriesWrapper>
          <AnimatePresence mode="wait">
            {(!selectedCategory ? categories : selectedCategory?.subCategories)?.map((category: CategoryDto, index) => (
              <motion.div
                key={category.id}
                initial={{opacity: 0, x: -10}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -10}}
                transition={{duration: 0.2, delay: 0.1 * index}}
              >
                <CategoryCard
                  title={category.name}
                  onClick={() => {
                    params.toggleFilter('categoryId', category.id)
                    setSelectedCategory(category);
                  }}
                  description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>

              </motion.div>
              ))}

          </AnimatePresence>
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