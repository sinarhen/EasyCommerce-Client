'use client'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {useParamsStore} from "@/hooks/use-params-store";
import React, {useCallback} from "react";
import {shallow} from "zustand/shallow";
import {productsPageSizes} from "@/lib/constants";
import {Label} from "@/components/ui/label";

export default function ProductsPageSizeSelector() {
  const params = useParamsStore((state) => {
    return {
      setParams: state.setParams,
      pageSize: state.pageSize,
    }
  }, shallow)

  const changePageSize = useCallback((size: number) => {
    params.setParams({
      pageSize: size,
      pageNumber: 1,
    })
  }, [params])
  return (
    <div className="flex flex-col">
      <Label className="mt-3 mb-1">Page size</Label>
      <Select onValueChange={value => {
        changePageSize(Number(value))
      }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={params.pageSize ?? "Select page size"}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-sm">Page size</SelectLabel>

            {productsPageSizes.map(size => (
              <SelectItem
                key={size}
                value={size}
              >
                <SelectLabel>{size}</SelectLabel>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </div>
    )
}