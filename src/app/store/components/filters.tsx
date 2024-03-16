'use client'

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Filter} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import React, {useCallback} from "react";
import {FilterSectionGroupCheckbox} from "@/app/store/components/filterSectionGroupCheckbox";
import {FilterSectionGroup} from "@/app/store/components/filterSectionGroup";
import {FilterSection} from "@/app/store/components/filterSection";
import {getProducts} from "@/actions/products";
import {useParamsStore} from "@/hooks/use-params-store";
import {shallow} from "zustand/shallow";

const sizes = [
  {
    id: "small",
    title: "Small",
  },
  {
    id: "medium",
    title: "Medium",
  },
  {
    id: "large",
    title: "Large",
  },
  {
    id: "extralarge",
    title: "Extra Large",
  },
]

const colors = [
  {
    id: "red",
    title: "Red",
  },
  {
    id: "blue",
    title: "Blue",
  },
  {
    id: "green",
    title: "Green",
  },
  {
    id: "yellow",
    title: "Yellow",
  },
]

const categories = [
  {
    id: "shirts",
    title: "Shirts",
  },
  {
    id: "pants",
    title: "Pants",
  },
  {
    id: "shoes",
    title: "Shoes",
  },
  {
    id: "accessories",
    title: "Accessories",
  },
]

const occasions = [ // Test values. Data should be fetched from the server
  {
    id: "casual",
    title: "Casual",
  },
  {
    id: "formal",
    title: "Formal",
  },
  {
    id: "party",
    title: "Party",
  },
  {
    id: "wedding",
    title: "Wedding",
  },
]




export function Filters() {
  const params = useParamsStore(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    filterBy: state.filterBy,
    categoryId: state.categoryId,
    colorId: state.colorId,
    sizeId: state.sizeId,
    collectionId: state.collectionId,
    occasionId: state.occasionId,

  }), shallow);
  const setParams = useParamsStore(state => state.setParams);
  const onApply = async () => {
    console.log("Params:", params)
    await getProducts(params);
  }

  const toggleFilter = useCallback((filter: "categoryId" | "sizeId" | "colorId" | "occasionId", value: string) => {
    console.log("togglefilter for ", filter, value)
    if (params[filter]?.includes(value)) {
      setParams({[filter]: params[filter]?.filter(v => v !== value)})
    } else {
      setParams({[filter]: [...(params[filter] || []), value]})
    }
  }, [params, setParams])
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"xs"}>
          <Filter size={iconSizes.sm}/>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Filters for products
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-y-5">
          <div>
            <Label htmlFor="searchTerm">
              Search
            </Label>
            <Input type="text" id="searchTerm" placeholder="Search for products"/>

          </div>
          <FilterSection title={"Category"} description={"Filter by category"}>
            <FilterSectionGroup>
              {categories.map(category => (
                <FilterSectionGroupCheckbox
                  key={category.id}
                  checked={params?.categoryId?.includes(category.id)} onCheck={() => toggleFilter("categoryId", category.id)} title={category.title} id={category.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Color"} description={"Filter by color"}>
            <FilterSectionGroup>
              {colors.map(color => (
                <FilterSectionGroupCheckbox
                  key={color.id}
                  checked={params?.colorId?.includes(color.id)} onCheck={() => toggleFilter("colorId", color.id)} title={color.title} id={color.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Size"} description={"Filter by size"}>
            <FilterSectionGroup>
              {sizes.map(size => (
                <FilterSectionGroupCheckbox
                  key={size.id}
                  checked={params?.sizeId?.includes(size.id)}
                  onCheck={() => toggleFilter("sizeId", size.id)} title={size.title} id={size.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Price"} description={"Filter by price"}>
            <div className="flex items-center gap-x-1">
              <Input onChange={(e) => setParams({...params, minPrice: e.target.valueAsNumber})} value={params.minPrice?.toString()} type="number" id="minPrice" placeholder="Min"/>
              <Input onChange={(e) => setParams({...params, maxPrice: e.target.valueAsNumber})} value={params.maxPrice?.toString()} type="number" id="maxPrice" placeholder="Max"/>
            </div>
          </FilterSection>
          <FilterSection title={"Occasion"} description={"Filter by occasion"}>
            <FilterSectionGroup>
              {occasions.map(occasion => (
                <FilterSectionGroupCheckbox
                  key={occasion.id}
                  checked={params?.occasionId?.includes(occasion.id)} onCheck={() => toggleFilter("occasionId", occasion.id)} title={occasion.title} id={occasion.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="mt-2 w-full"
              onClick={onApply}
              type="submit">Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
