'use client'

import CategoryCard from "@/components/ui/category-card";
import React, {useCallback} from "react";
import {Button} from "@/components/ui/button";
import {DollarSign, X} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {toast} from "react-hot-toast";
import {useParamsStore} from "@/hooks/use-params-store";
import {shallow} from "zustand/shallow";
import {Category} from "@/lib/_api/client";
import {usePathname, useRouter} from "next/navigation";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";


export default function AnimatedCategories({
  initialCategories,
                                           }: {
  initialCategories: Category[]
}) {
  const params = useParamsStore(state => ({
    categories: state.categories,
    toggleCategory: state.toggleCategory,
    resetCategories: state.resetCategories
  }), shallow);

  const categoriesToDisplay = params?.categories?.length === 0 ? initialCategories : params.categories![params.categories!.length - 1].subCategories;

  const router = useRouter()
  const pathname = usePathname();

  const onApply = useCallback(async () => {
    const lastCategory = params.categories?.at(params.categories?.length - 1)
    const searchParams = new URLSearchParams();

    if (lastCategory?.id){

      searchParams.set('categoryId', lastCategory.id!)

      const url = `${pathname}?${searchParams.toString()}`
      router.push(url)
      toast.success('Categories applied')
    } else {
      searchParams.delete('categoryId')

      const url = `${pathname}?${searchParams.toString()}`
      router.push(url)
    }
  }, [params.categories, pathname, router])

  return (
    <div>
      <div className="flex justify-between  mb-3">
        <div className="gap-x-1 flex">
          <Button
            disabled
            variant="outline"
            className="group flex items-center gap-x-1"
          >
            All
          </Button>
          {params?.categories?.map(category => (
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
        <div className={"gap-x-1 flex "}>
          <Button variant={"ghost"} onClick={() => {
            params?.resetCategories()
          }}>Clear</Button>
          <Button onClick={onApply} variant="outline" className="gap-x-2 hover:shadow-lg hover:text-purple-800 transition-all hover:border-purple-800 hover:shadow-purple-800/[0.1] w-full ">
            Apply
          </Button>
        </div>

      </div>
      {categoriesToDisplay?.length !== 0 ? (

        <Carousel
          className={"w-full"}
        >
          <CarouselContent >
            {/*<AnimatePresence mode={"wait"}>*/}
            {categoriesToDisplay?.map((category: Category, index) => (
              <CarouselItem
                key={category.id}
                className="basis-1/2 lg:basis-1/3">
                <div onClick={() => params.toggleCategory(category)} className="bg-white hover:border-purple-800 dark:hover:border-purple-800  dark:bg-neutral-950 text-gradient animate-gradient dark:border-neutral-800 cursor-pointer px-6 py-4 rounded border w-full h-52">
                  <h1 className="font-semibold animate-gradient text-gradient text-2xl">{category.name}</h1>
                </div>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex"/>
          <CarouselNext className="hidden lg:flex"/>
        </Carousel>
      )
        : (
          <div onClick={() => params.resetCategories()}
               className="bg-white  dark:bg-neutral-950 text-gradient animate-gradient dark:border-neutral-800 cursor-pointer px-6 py-4 rounded border w-full h-52">
            <h1 className="font-semibold animate-gradient text-gradient text-2xl">No subcategories. Reset?</h1>
          </div>
        )

      }
    </div>
  )
}