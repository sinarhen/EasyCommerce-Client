'use client'

import {Header2} from "@/components/ui/header";
import {InspectionPanel, List, LucideIcon, Shirt, Sun} from "lucide-react";
import {seasonsDescriptions} from "@/lib/constants";
import React from "react";
import {MaterialDto, Season} from "@/types/product";
import {IdNameDto} from "@/types/shared";
import {InformationList} from "@/app/store/products/[productId]/components/information-list";


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
  const items: {
    icon: LucideIcon,
    text: string,
    description?: string | React.ReactNode
  }[] = [
    {
      icon: Sun,
      text: season,
      description: seasonsDescriptions[season]
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
    <div className="mt-6">
      <Header2>
        Information
      </Header2>
      <InformationList items={items}/>
    </div>
  )
}