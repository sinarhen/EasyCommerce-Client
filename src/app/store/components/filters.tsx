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
import {ProductFiltersDto} from "@/types/product";

type FiltersProps = Omit<ProductFiltersDto, 'categories'>

export function Filters({
  filters
                        }: {
  filters: FiltersProps
}) {
  const {sizes, colors, occasions, materials} = filters;
  const params = useParamsStore(state => ({
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    filterBy: state.filterBy,
    colorId: state.colorId,
    sizeId: state.sizeId,
    collectionId: state.collectionId,
    occasionId: state.occasionId,
    toggleFilter: state.toggleFilter,

  }), shallow);
  const setParams = useParamsStore(state => state.setParams);

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
          <FilterSection title={"Color"} description={"Filter by color"}>
            <FilterSectionGroup>
              {colors.map(color => (
                <FilterSectionGroupCheckbox
                  key={color.id}
                  checked={params?.colorId?.includes(color.id)} onCheck={() => params.toggleFilter("colorId", color.id)}
                  title={color.name} id={color.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Size"} description={"Filter by size"}>
            <FilterSectionGroup>
              {sizes.sort(s => s.value).map(size => (
                <FilterSectionGroupCheckbox
                  key={size.id}
                  checked={params?.sizeId?.includes(size.id)}
                  onCheck={() => params.toggleFilter("sizeId", size.id)} title={size.name} id={size.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Price"} description={"Filter by price"}>
            <div className="flex items-center gap-x-1">
              <Input onChange={(e) => setParams({...params, minPrice: e.target.valueAsNumber})}
                     value={params.minPrice?.toString()} type="number" id="minPrice" placeholder="Min"/>
              <Input onChange={(e) => setParams({...params, maxPrice: e.target.valueAsNumber})}
                     value={params.maxPrice?.toString()} type="number" id="maxPrice" placeholder="Max"/>
            </div>
          </FilterSection>
          <FilterSection title={"Occasion"} description={"Filter by occasion"}>
            <FilterSectionGroup>
              {occasions.map(occasion => (
                <FilterSectionGroupCheckbox
                  key={occasion.id}
                  checked={params?.occasionId?.includes(occasion.id)}
                  onCheck={() => params.toggleFilter("occasionId", occasion.id)} title={occasion.name} id={occasion.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="mt-2 w-full"
              onClick={() => {}}
              type="submit">Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
