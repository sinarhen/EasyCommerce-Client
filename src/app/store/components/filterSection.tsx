import React from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {ChevronDown} from "lucide-react";
import {iconSizes} from "@/lib/constants";

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
          <ChevronDown size={iconSizes.md}/>
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