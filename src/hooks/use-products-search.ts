import {createWithEqualityFn} from "zustand/traditional";
import {ProductsOrderBy, ProductsSearchParams} from "@/types/product";


type Products = {
  setParams: (params: Partial<ProductsSearchParams>) => void;
  reset: () => void;
}

const initialState: ProductsSearchParams = {
  pageNumber: 1,
  pageSize: 12,
  searchTerm: '',
  orderBy: ProductsOrderBy.name,
  filterBy: 'live',
  categoryId: '',
  colorId: '',
  sizeId: '',
  collectionId: '',
  materialId: '',
  occasionId: '',
  minPrice: 0,
  maxPrice: 0
}

export const useParamsStore = createWithEqualityFn<ProductsSearchParams & Products>()(set => ({
  ...initialState,

  setParams: (newParams: Partial<ProductsSearchParams>) => {
    set(state => {
      if (newParams.pageNumber) {
        return {...state, pageNumber: newParams.pageNumber}
      } else {
        return {...state, ...newParams, pageNumber: 1}
      }
    })
  },
  reset: () => set(initialState),
}))