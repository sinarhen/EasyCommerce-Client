'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {useParamsStore} from "@/hooks/use-params-store";
import React, {useCallback} from "react";
import {shallow} from "zustand/shallow";
import useProducts from "@/hooks/use-products";
import {Label} from "@/components/ui/label";

export function ProductsPagination() {
  const total = useProducts().data?.length ?? 0;
  const params = useParamsStore((state) => ({
    setParams: state.setParams,
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
  }), shallow)
  const changePage = useCallback((page: number) => {
    params.setParams({pageNumber: page})
  }, [params])

  return (
    <div className="flex flex-col">
      <Label className="mt-3 mb-1">Pagination</Label>
      <Pagination className="justify-end">
        <PaginationContent>
          {(total > 1 && params.pageNumber !== 1) && (
            <PaginationItem>
              <PaginationPrevious onClick={() => changePage(params.pageNumber! - 1)}/>
            </PaginationItem>
          )}
          {Array.from({length: total / params.pageSize! + 1}, (_, i) => i + 1).map((page) => {
            if (page < params.pageNumber! - 2 || page > params.pageNumber! + 2) {
              return null
            }
            return (
              <PaginationItem key={page}>
                <PaginationLink isActive={page === params.pageNumber}
                                onClick={() => changePage(page)}>{page}</PaginationLink>
              </PaginationItem>
            )
          })}
          {(total > 1 && params.pageNumber !== Math.floor(total / params.pageSize! + 1)) && (
            <PaginationItem>
              <PaginationNext onClick={() => changePage(params.pageNumber! + 1)}/>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>

    </div>
  )
}
