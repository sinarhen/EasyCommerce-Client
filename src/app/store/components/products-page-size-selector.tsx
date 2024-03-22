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

export default function ProductsPageSizeSelector() {
  const params = useParamsStore((state) => {
    return {
      setParams: state.setParams,
      pageSize: state.pageSize,
    }
  }, shallow)

  const changePageSize = useCallback((size: number) => {
    params.setParams({
      pageSize: size
    })
  }, [params])
  return (
    <Select onValueChange={value => {
      changePageSize(Number(value))
    }}>
      <SelectTrigger className="mt-4 w-[180px]">
        <SelectValue placeholder={params.pageSize ?? "Select page size"}/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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
  )
}