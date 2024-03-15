import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import {ArrowDown, ChevronDown, Filter} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {Checkbox} from "@/components/ui/checkbox";
import React from "react";


export function FilterSectionGroupCheckbox({
  title,
  id,
                                           }: {
  title: string,
  id: string
}){
  return (
    <div className="flex items-center gap-x-1">
      <Checkbox id={id}/>
      <Label htmlFor={id}>
        {title}
      </Label>
    </div>
  )
}

export function FilterSectionGroup({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <div className="mt-2 gap-y-2 flex flex-col">
      {children}
    </div>
  )
}

export function FilterSection({
  title,
  description,
  children
                                      }: {
  title: string,
  description: string
  children: React.ReactNode
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <h4 className=" flex items-center font-semibold">
          {title}
          <ChevronDown size={iconSizes.md} />
        </h4>

      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="text-sm text-gray-500">
          {description}
        </p>

        {children}

      </CollapsibleContent>
    </Collapsible>

  )
}

export function Filters() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"xs"}>
          <Filter size={iconSizes.sm}/>
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} >
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Filters for products
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-y-2">
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
              <FilterSectionGroupCheckbox title={"Red"} id={"red"}/>
              <FilterSectionGroupCheckbox title={"Blue"} id={"blue"}/>
              <FilterSectionGroupCheckbox title={"Green"} id={"green"}/>
              <FilterSectionGroupCheckbox title={"Yellow"} id={"yellow"}/>
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Size"} description={"Filter by size"}>
            <FilterSectionGroup>
              <FilterSectionGroupCheckbox title={"Small"} id={"small"}/>
              <FilterSectionGroupCheckbox title={"Medium"} id={"medium"}/>
              <FilterSectionGroupCheckbox title={"Large"} id={"large"}/>
              <FilterSectionGroupCheckbox title={"Extra Large"} id={"xl"}/>
            </FilterSectionGroup>
          </FilterSection>
          <FilterSection title={"Price"} description={"Filter by price"}>
            <div className="flex items-center gap-x-1">
              <Input type="number" id="minPrice" placeholder="Min"/>
              <Input type="number" id="maxPrice" placeholder="Max"/>
            </div>
          </FilterSection>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="mt-2 w-full" type="submit">Apply</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
