import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import React from "react";

export function FilterSectionGroupCheckbox({
  title,
  id,
  onCheck,
  checked
                                           }: {
  title: string,
  id: string,
  onCheck?: () => void;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center gap-x-1">
      <Checkbox checked={checked} value={"dsa"} id={id} onCheckedChange={onCheck}/>
      <Label htmlFor={id}>
        {title}
      </Label>
    </div>
  )
}