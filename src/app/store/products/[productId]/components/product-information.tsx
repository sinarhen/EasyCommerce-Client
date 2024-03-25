import {Header2} from "@/components/ui/header";
import {ChevronDown, InspectionPanel, List, LucideIcon, Shirt, Sun} from "lucide-react";
import {iconSizes, seasonsDescriptions} from "@/lib/constants";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import React from "react";
import {MaterialDto, Season} from "@/types/product";
import {IdNameDto} from "@/types/shared";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

interface InformationListItemProps {
  icon: LucideIcon,
  text: string,
  description: string
}

const InformationListItem: React.FC<InformationListItemProps> = ({icon: IconComponent, text, description}) => (
  <span className="flex flex-col transition-all group gap-x-1">
    <div className="flex gap-x-1 items-center">
      <IconComponent className="transition-all group-hover:rotate-[120deg]" size={iconSizes.md}/>
      <span className='group-hover:translate-x-1 transition-transform'>
        {text}
      </span>
    </div>
    <div className="group-hover:max-h-full group-hover:text-white text-transparent transition-all  max-h-0">
      {description}
    </div>
  </span>
);
const InformationList: React.FC<InformationListProps> = ({items}) => (
  <div className="flex font-thin text-lg flex-col gap-y-1">
    {items.map((item, index) => (
      <InformationListItem key={index} {...item} />
    ))}
  </div>
);

interface InformationListProps {
  items: InformationListItemProps[]
}


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
  const items = [
    {
      icon: Sun,
      text: season,
      description: seasonsDescriptions[season]
    },
    {
      icon: Shirt,
      text: occasion.name,
      description: '' // Add description if available
    },
    {
      icon: List,
      text: collection.name,
      description: `Browse ${collection.name} collection.`
    },
    {
      icon: InspectionPanel,
      text: 'Materials',
      description: '' // Add description if available
    }
  ];

  return (
    <div className="mt-6">
      <Header2>
        Information
      </Header2>
      <InformationList items={items}/>
    </div>
  )
}