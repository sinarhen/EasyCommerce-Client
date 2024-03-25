import {Header2} from "@/components/ui/header";
import {ChevronDown, InspectionPanel, Shirt, Sun} from "lucide-react";
import {iconSizes, seasonsDescriptions} from "@/lib/constants";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import React from "react";
import {MaterialDto, Season} from "@/types/product";
import {IdNameDto} from "@/types/shared";

export default function ProductInformation({
  description,
  season,
  occasion,
  collection,
  materials
}: {
  description: string,
  season: Season,
  occasion: IdNameDto,
  collection: IdNameDto,
  materials: MaterialDto[]
}){
  return (
    <div className="mt-4">
      <Header2>
        Information
      </Header2>
      <div className="flex font-thin text-lg flex-col gap-y-1">
        <p>
          {description}
        </p>
        <span className="flex flex-col transition-all group gap-x-1">
            <div className="flex gap-x-1 items-center">
              <Sun className="transition-all group-hover:rotate-[120deg]" size={iconSizes.md}/>
              <span className='group-hover:translate-x-1 transition-transform'>
                {season}
              </span>
            </div>
            <div className="group-hover:max-h-full group-hover:text-white text-transparent transition-all  max-h-0">
              {seasonsDescriptions[season]}
            </div>
          </span>
        <span className="flex transition-all items-center gap-x-1">
            <Shirt size={iconSizes.md}/>
          {occasion.name}
          </span>
        <span className="flex items-center gap-x-1">
            <Sun size={iconSizes.md}/>
          {collection.name}
          </span>
        <div>
          <Collapsible>
            <CollapsibleTrigger>

              <div className="flex gap-x-1 items-center">
                <InspectionPanel size={iconSizes.md}/>
                Materials
                <ChevronDown size={iconSizes.md}/>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="pl-7">
                {materials.map((material, index) => (
                  <li key={index}>
                    {material.name} - {material.percentage * 100}%
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>

        </div>

      </div>
    </div>
  )
}