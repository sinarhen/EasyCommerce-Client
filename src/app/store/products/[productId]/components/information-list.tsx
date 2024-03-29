import React from "react";
import {iconSizes} from "@/lib/constants";
import {InspectionPanel, List, LucideIcon, Shirt, Sun} from "lucide-react";
import {IdNameDto} from "@/types/shared";
import {MaterialDto} from "@/types/product";

export const InformationList: React.FC<InformationListProps> = ({
  collection,
  season,
  occasion,
  materials
                                                                }) => {
  const items: InformationListItemProps[] = [
    {
      icon: Sun,
      text: season,
    },
    {
      icon: Shirt,
      text: occasion.name,
    },
    {
      icon: List,
      text: collection.name,
    },
    {
      icon: InspectionPanel,
      text: 'Materials',
      description: <>
        {materials.map((material, index) => (
          <span key={index} className="flex gap-x-1 items-center">
            <span>{material.name}</span>
            <span>{material.percentage}%</span>
          </span>
        ))}
      </>
    }
  ];

  return (
    <div className="flex items-center md:items-start font-thin sm:text-lg text-sm flex-col gap-y-1">
      <div>
        {items.map((item, index) => (
          <InformationListItem key={index} {...item} />
        ))}

      </div>
    </div>
  );
}

interface InformationListProps {
  collection: IdNameDto,
  season: string,
  occasion: IdNameDto,
  materials: MaterialDto[]
}

interface InformationListItemProps {
  icon: LucideIcon,
  text: string,
  description?: string | React.ReactNode
}

export const InformationListItem: React.FC<InformationListItemProps> = ({icon: IconComponent, text, description}) => (
  <span className="flex flex-col transition-all group gap-x-1">
    <div className="flex gap-x-1 items-center">
      <IconComponent className="transition-all group-hover:rotate-[10deg]" size={iconSizes.md}/>
      <span className='
      group-hover:translate-x-1 transition-transform
      '>
        {text}
      </span>
    </div>
    <div className={"text-gray-400  group-hover:translate-x-1 transition-transform "
      // "group-hover:max-h-full group-hover:text-white text-transparent transition-all  max-h-0"
    }>
      {description}
    </div>
  </span>
);