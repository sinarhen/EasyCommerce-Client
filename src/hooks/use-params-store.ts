import {createWithEqualityFn} from "zustand/traditional";
import {CategoryDto, ProductsOrderBy, ProductsSearchParams} from "@/types/product";
import {IdNameDto} from "@/types/shared";


export type Products = {
  setParams: (params: Partial<ProductsSearchParams>) => void;
  reset: () => void;
  toggleFilter: (filter: "sizes" | "colors" |  "materials" | "occasions", value: IdNameDto) => void;
  toggleCategory: (category: CategoryDto) => void;
  resetCategories: () => void;
  isFilterActive: (filter: "sizes" | "colors" |  "materials" | "occasions", valueId: string) => boolean;
}

const initialState: ProductsSearchParams = {
  pageNumber: 1,
  pageSize: 12,
  searchTerm: '',
  orderBy: ProductsOrderBy.name,
  filterBy: 'live',
  categories: [],
  colors: [],
  sizes: [],
  collections: [],
  materials: [],
  occasions: [],
  minPrice: 0,
  maxPrice: 0
}

export const useParamsStore = createWithEqualityFn<ProductsSearchParams & Products>()((set, get) => ({
  ...initialState,
  setParams: (newParams: Partial<ProductsSearchParams>) => {
    return set(state => {
      return {...state, ...newParams}
    })
  },
  isFilterActive: (filter: "sizes" | "colors" |  "materials" | "occasions", valueId: string) => {
    const state = get()
    return (state[filter] ?? []).filter(v => v.id === valueId).length > 0
  },
  toggleFilter: (filter: "sizes" | "colors" |  "materials" | "occasions", value: IdNameDto) => {
    return set(
      state => {
        if (state[filter])
        {
          if ((state[filter] ?? []).filter(v => v.id === value.id).length > 0){
            console.log('exist in filter', value.name)
            return {...state, [filter]: state[filter]?.filter(v => v.id !== value.id)}
          } else {
            return {...state, [filter]: [...(state[filter] || []), value]}
          }
        }
        throw new Error("Filter not found")
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
          return {...state, categories: [...(state.categories ?? []), category]}
        }
      }
    )
  },
  reset: () => set(initialState),
}))