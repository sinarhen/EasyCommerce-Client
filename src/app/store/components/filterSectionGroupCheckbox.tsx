import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import React from "react";

export function FilterSectionGroupCheckbox({
                                             title,
                                             id,
                                           }: {
  title: string,
  id: string
}) {
  return (
    <div className="flex items-center gap-x-1">
      <Checkbox id={id}/>
      <Label htmlFor={id}>
        {title}
      </Label>
    </div>
  )
}