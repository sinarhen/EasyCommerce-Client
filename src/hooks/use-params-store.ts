import {createWithEqualityFn} from "zustand/traditional";
import {CategoryDto, ProductsOrderBy, ProductsSearchParams} from "@/types/product";


export type Products = {
  setParams: (params: Partial<ProductsSearchParams>) => void;
  reset: () => void;
  toggleFilter: (filter: "sizeId" | "colorId" | "occasionId", value: string) => void;
  toggleCategory: (category: CategoryDto) => void;
  resetCategories: () => void;
}

const initialState: ProductsSearchParams = {
  pageNumber: 1,
  pageSize: 12,
  searchTerm: '',
  orderBy: ProductsOrderBy.name,
  filterBy: 'live',
  categories: [],
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
  toggleFilter: (filter: "sizeId" | "colorId" | "occasionId", value: string) => {
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
  resetCategories: () => set(state => ({...state, categories: []})),
  toggleCategory: (category: CategoryDto) => {
    return set(
      state => {
        const existingCategory = state.categories?.find(c => c.id === category.id);
        if (existingCategory) {
          return {...state, categories: state.categories?.filter(c => c.id !== category.id)}
        } else {
          console.log('Adding category', category)
          console.log("New categories", [...(state.categories ?? []), category])
          return {...state, categories: [...(state.categories ?? []), category]}
        }
      }
    )
  },
  reset: () => set(initialState),
}))