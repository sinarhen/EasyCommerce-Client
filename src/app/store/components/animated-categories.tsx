'use client'

import CategoryCard from "@/components/ui/category-card";
import React, {useCallback} from "react";
import {CategoryDto} from "@/types/product";
import {Collapsible, CollapsibleContent} from "@/components/ui/collapsible";
import {Button} from "@/components/ui/button";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import {useParamsStore} from "@/hooks/use-params-store";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";
import {X} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {AnimatePresence, motion} from "framer-motion";
import {shallow} from "zustand/shallow";
import useProducts from "@/hooks/use-products";
import toast from "react-hot-toast";


export default function AnimatedCategories({
                                             initialCategories
                                           }: {
  initialCategories?: CategoryDto[]
}) {
  // const [open, setOpen] = React.useState(false);
  const params = useParamsStore(state => ({
    categories: state.categories,
    toggleCategory: state.toggleCategory,
    resetCategories: state.resetCategories
  }), shallow);

  const categoriesToDisplay = params?.categories?.length === 0 ? initialCategories : params.categories![params.categories!.length - 1].subCategories;

  const {refetch, error, isLoading} = useProducts();

  const onApply = useCallback(async () => {
    toast.success("Categories applied")
    await refetch()
  }, [refetch])

  if (isLoading) return (
    <CategoriesWrapper>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
      <CategoryCardSkeleton/>
    </CategoriesWrapper>
  )

  if (error) {
    return (
      <div>
        Error occured while fetching categories
      </div>
    )
  }
  return (
    <>
      {params.categories?.length !== 0 && (
        <p className="font-semibold">
          Selected categories
        </p>
      )}
      <div className="flex justify-between  mb-1">
        <div className="gap-x-1 flex">
          {params.categories?.map(category => (
            <Button
              variant="outline"
              key={category.id}
              onClick={() => params.toggleCategory(category)}
              className="group flex items-center gap-x-1"
            >
              {category.name}
              <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
            </Button>
          ))}
        </div>
        <div className={"gap-x-1 " + (params.categories?.length === 0 ? "hidden" : "flex ")}
             hidden={params.categories!.length === 0}>
          <Button variant={"ghost"} onClick={() => params.resetCategories()}>Clear</Button>
          <Button variant={"outline"} onClick={onApply}>Apply</Button>
        </div>

      </div>
      {/*<Collapsible open={open} onOpenChange={setOpen}>*/}

        <CategoriesWrapper
          className={categoriesToDisplay?.length === 0 ? "grid-cols-1 sm:grid-cols-1 lg:grid-cols-1" : ""}>
          <AnimatePresence mode="wait">
            {categoriesToDisplay?.length !== 0 ? categoriesToDisplay?.map((category: CategoryDto, index) => (
              <motion.div
                key={category.id}
                initial={{opacity: 0, x: -10}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -10}}
                transition={{duration: 0.2, delay: 0.1 * index}}
              >
                <CategoryCard
                  title={category.name}
                  onClick={() => params.toggleCategory(category)}
                  description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>

              </motion.div>
            )) : (
              <CategoryCard
                buttonText="Clear"
                buttonIcon={X}
                title={"No categories found"}
                description={"Try to clear the filters"}
                onClick={() => params.resetCategories()}

              />
            )}

          </AnimatePresence>
        </CategoriesWrapper>

        {/*<CollapsibleContent>*/}
        {/*  <CategoriesWrapper>*/}
        {/*    {categoriesToDisplay?.map((category: CategoryDto) => (*/}
        {/*      <CategoryCard*/}
        {/*        key={category.id} title={category.name}*/}
        {/*        description={`Look at ${category.name.toLowerCase()} collection`} image={category.imageUrl}/>*/}
        {/*    ))}*/}
        {/*  </CategoriesWrapper>*/}
        {/*</CollapsibleContent>*/}


      {/*</Collapsible>*/}

    </>

  )
}