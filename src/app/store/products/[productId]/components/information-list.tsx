import React from "react";
import {iconSizes} from "@/lib/constants";
import {LucideIcon} from "lucide-react";

export const InformationList: React.FC<InformationListProps> = ({items}) => (
  <div className="flex font-thin text-lg flex-col gap-y-1">
    {items.map((item, index) => (
      <InformationListItem key={index} {...item} />
    ))}
  </div>
);

interface InformationListProps {
  items: InformationListItemProps[]
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