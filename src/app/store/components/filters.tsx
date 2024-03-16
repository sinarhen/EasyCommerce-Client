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


export function Filters() {
  const params = useParamsStore(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
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
        <form method="get" action="/" className="flex flex-col gap-y-5">
          <div>
            <Label htmlFor="searchTerm">
              Search
            </Label>
            <Input type="text" id="searchTerm" placeholder="Search for products"/>

          </div>
          <FilterSection title={"Category"} description={"Filter by category"}>
            <FilterSectionGroup>
              <FilterSectionGroupCheckbox title={"Shirts"} id={"shirts"}/>
              <FilterSectionGroupCheckbox title={"Pants"} id={"pants"}/>
              <FilterSectionGroupCheckbox title={"Shoes"} id={"shoes"}/>
              <FilterSectionGroupCheckbox title={"Accessories"} id={"accessories"}/>
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Color"} description={"Filter by color"}>
            <FilterSectionGroup>
              <FilterSectionGroupCheckbox onCheck={() => toggleFilter("colorId", "red")} title={"Red"} id={"red"}/>
              <FilterSectionGroupCheckbox onCheck={() => toggleFilter("colorId", "blue")} title={"Blue"} id={"blue"}/>
              <FilterSectionGroupCheckbox title={"Green"} id={"green"} onCheck={() => toggleFilter("colorId", "green")}/>
              <FilterSectionGroupCheckbox title={"Yellow"} id={"yellow"} onCheck={() => toggleFilter("colorId", "yellow")}/>
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Size"} description={"Filter by size"}>
            <FilterSectionGroup>
              <FilterSectionGroupCheckbox checked onCheck={() => toggleFilter("sizeId", "small")} title={"Small"} id={"small"}/>
              <FilterSectionGroupCheckbox onCheck={() => toggleFilter("sizeId", "medium")} title={"Medium"} id={"medium"}/>
              <FilterSectionGroupCheckbox onCheck={() => toggleFilter("sizeId", "large")} title={"Large"} id={"large"}/>
              <FilterSectionGroupCheckbox onCheck={() => toggleFilter("sizeId", "extralarge")} title={"Extra Large"} id={"xl"}/>
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Price"} description={"Filter by price"}>
            <div className="flex items-center gap-x-1">
              <Input type="number" id="minPrice" placeholder="Min"/>
              <Input type="number" id="maxPrice" placeholder="Max"/>
            </div>
          </FilterSection>
        </form>

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
