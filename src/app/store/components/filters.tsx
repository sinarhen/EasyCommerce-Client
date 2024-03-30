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
import {Filter, X} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import React from "react";
import {FilterSectionGroupCheckbox} from "@/app/store/components/filterSectionGroupCheckbox";
import {FilterSectionGroup} from "@/app/store/components/filterSectionGroup";
import {FilterSection} from "@/app/store/components/filterSection";
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
    materials: state.materials,
    searchTerm: state.searchTerm,
    orderBy: state.orderBy,
    isFilterActive: state.isFilterActive,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    filterBy: state.filterBy,
    colors: state.colors,
    sizes: state.sizes,
    occasions: state.occasions,
    toggleFilter: state.toggleFilter,

  }), shallow);
  const setParams = useParamsStore(state => state.setParams);

  console.log(params)
  return (
    <Sheet>
      <div className="flex items-center gap-x-3">
        <SheetTrigger asChild>
          <Button size={"sm"}>
            <Filter size={iconSizes.sm}/>
            Filter
          </Button>
        </SheetTrigger>
        <div className="flex gap-x-1 items-center">
          {params?.colors?.map(c => (
            <Button
              variant="outline"
              key={c.id}
              onClick={() => params.toggleFilter("colors", c)}
              className="group flex items-center gap-x-1"
            >
              {c.name}
              <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
            </Button>
          ))}
          {params?.sizes?.map(s => (
            <Button
              variant="outline"
              key={s.id}
              onClick={() => params.toggleFilter("sizes", s)}
              className="group flex items-center gap-x-1"
            >
              {s.name}
              <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
            </Button>
          ))}
          {params?.occasions?.map(o => (
            <Button
              variant="outline"
              key={o.id}
              onClick={() => params.toggleFilter("occasions", o)}
              className="group flex items-center gap-x-1"
            >
              {o.name}
              <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
            </Button>
          ))}
          {params?.materials?.map(m => (
            <Button
              variant="outline"
              key={m.id}
              onClick={() => params.toggleFilter("materials", m)}
              className="group flex items-center gap-x-1"
            >
              {m.name}
              <X className="group-hover:rotate-90 transition-transform" size={iconSizes.sm}/>
            </Button>
          ))}

        </div>
      </div>

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
                  checked={(params?.colors?.filter(c => color.id === c.id).length ?? 0) > 0} onCheck={() => params.toggleFilter("colors", color)}
                  title={color.name} id={color.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Size"} description={"Filter by size"}>
            <FilterSectionGroup>
              {sizes.sort(s => s.value).map(size => (
                <FilterSectionGroupCheckbox
                  key={size.id}
                  checked={(params?.sizes?.filter(s => size.id === s.id).length || 0) > 0}
                  onCheck={() => params.toggleFilter("sizes", size)} title={size.name} id={size.id}/>
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
                  checked={params.isFilterActive("occasions", occasion.id)}
                  onCheck={() => params.toggleFilter("occasions", occasion)} title={occasion.name}
                  id={occasion.id}/>
              ))}
            </FilterSectionGroup>
          </FilterSection>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button
              className="mt-2 w-full"
              onClick={() => {
              }}
              type="submit">Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
