'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {useParamsStore} from "@/hooks/use-params-store";
import {useCallback} from "react";
import {shallow} from "zustand/shallow";
import useProducts from "@/hooks/use-products";

export function ProductsPagination() {
  const total = useProducts().data?.length ?? 0;
  const params = useParamsStore((state) => ({
    ...state,
    setParams: state.setParams,
    pageNumber: state.pageNumber,
    pageSize: state.pageSize,
  }), shallow)
  const changePage = useCallback((page: number) => {
    params.setParams({...params, pageNumber: page})
  }, [params])

  return (
    <Pagination>
      <PaginationContent className="mt-4">
        {(total > 1 && params.pageNumber !== 1) && (
          <PaginationItem>
            <PaginationPrevious onClick={() => changePage(params.pageNumber! - 1)} />
          </PaginationItem>
        )}
        {Array.from({length: total/params.pageSize! + 1}, (_, i) => i + 1).map((page) => {
          if (page < params.pageNumber! - 2 || page > params.pageNumber! + 2) {
            return null
          }
          return (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === params.pageNumber} onClick={() => changePage(page)}>{page}</PaginationLink>
            </PaginationItem>
          )
        })}
        {(total > 1 && params.pageSize! * params.pageNumber! < total && params.pageNumber !== total) && (
          <PaginationItem>
            <PaginationNext onClick={() => changePage(params.pageNumber! + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
