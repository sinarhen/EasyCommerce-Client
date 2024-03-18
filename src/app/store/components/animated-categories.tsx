'use client'

import CategoryCard from "@/components/ui/category-card";
import React from "react";
import {CategoryDto} from "@/types/product";
import {Collapsible, CollapsibleContent} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import {useParamsStore} from "@/hooks/use-params-store";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";
import {getCategories} from "@/actions/products";
import {X} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {AnimatePresence, motion} from "framer-motion";

function useCategories(): UseQueryResult<CategoryDto[]> {

  const query = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categories = await getCategories();
      return categories.categories;
    }
  });

  return {...query};
}

export default function AnimatedCategories() {

  const {data, isLoading, error,} = useCategories();
  const [open, setOpen] = React.useState(false);
  const params = useParamsStore(state => ({
    categories: state.categories,
    setParams: state.setParams
  }));

  if (isLoading) return (
    <CategoriesWrapper>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
    </CategoriesWrapper>
  )

  if (error) {
    console.log(error)
    return (

      <div>
        Error occured while fetching categories
      </div>
    )
  }

  const toggleCategory = (category: CategoryDto) => {
    const newCategories = params.categories?.includes(category) ? params.categories?.filter(c => c.id !== category.id) : [...(params.categories ?? []), category];
    console.log("New categories:", newCategories)
    console.log("Old categories:", params.categories)
    params.setParams({...params, categories: [category]});
  }
  console.log(params)
  return (
    <>
      {params.categories?.length !== 0 && (
        <p className="font-semibold">
          Selected categories
        </p>
      )}
      <div className="flex gap-x-1 mb-1">
        {params.categories?.map(category => (
          <Button
            variant="outline"
            key={category.id}
            onClick={() => toggleCategory(category)}
            className="group flex items-center gap-x-1"
          >
            {category.name}
            <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
          </Button>
        ))}

      </div>
      <Collapsible open={open} onOpenChange={setOpen}>

        <CategoriesWrapper>
          <AnimatePresence>
            {(params?.categories?.length === 0 ? data : params?.categories?.pop()?.subCategories)?.map((category: CategoryDto, index) => (
              <motion.div
                key={category.id}
                initial={{opacity: 0, x: -10}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -10}}
                transition={{duration: 0.2, delay: 0.1 * index}}
              >
                <CategoryCard
                  title={category.name}
                  onClick={() => toggleCategory(category)}
                  description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>

              </motion.div>
            ))}

          </AnimatePresence>
        </CategoriesWrapper>

        <CollapsibleContent>
          <CategoriesWrapper>
            {data?.map((category: CategoryDto) => (
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