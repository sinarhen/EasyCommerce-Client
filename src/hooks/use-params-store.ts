import {createWithEqualityFn} from "zustand/traditional";
import {ProductsOrderBy, ProductsSearchParams} from "@/types/product";


type Products = {
  setParams: (params: Partial<ProductsSearchParams>) => void;
  reset: () => void;
  addFilter: (filter: "categoryId" | "sizeId" | "colorId" | "occasionId", value: string) => void;
}

const initialState: ProductsSearchParams = {
  pageNumber: 1,
  pageSize: 12,
  searchTerm: '',
  orderBy: ProductsOrderBy.name,
  filterBy: 'live',
  categoryId: [],
  colorId: [],
  sizeId: [],
  collectionId: [],
  materialId: [],
  occasionId: [],
  minPrice: 0,
  maxPrice: 0
}

export const useParamsStore = createWithEqualityFn<ProductsSearchParams & Products>()(set => ({
  ...initialState,

  setParams: (newParams: Partial<ProductsSearchParams>) => {
    return set(state => {
      if (newParams.pageNumber) {
        return {...state, pageNumber: newParams.pageNumber}
      } else {
        return {...state, ...newParams, pageNumber: 1}
      }
    })
  },
  addFilter: (filter: "categoryId" | "sizeId" | "colorId" | "occasionId", value: string) => {
    return set(
      state => {
        if (state[filter]?.includes(value)) {
          return {...state, [filter]: state[filter]?.filter(v => v !== value)}
        } else {
          return {...state, [filter]: [...(state[filter] || []), value]}
        }
      }
    )
  },
  reset: () => set(initialState),
}))