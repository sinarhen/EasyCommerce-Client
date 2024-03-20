import {ProductDto} from "@/types/product";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getProducts} from "@/actions/products";
import {useParamsStore} from "@/hooks/use-params-store";
import qs from "querystring";

export default function useProducts(products?: ProductDto[]): UseQueryResult<ProductDto[]>{
  const params = useParamsStore(state => state);
  const filteredParams = Object.fromEntries(
    Object.entries({
      categoryId: params.categories?.join(','),
      pageNumber: params.pageNumber,
      pageSize: params.pageSize,
      searchTerm: params.searchTerm,
      orderBy: params.orderBy,
      minPrice: params.minPrice,
      maxPrice: params.maxPrice,
      filterBy: params.filterBy,
      colorId: params.colorId?.join(','),
      sizeId: params.sizeId?.join(','),
      collectionId: params.collectionId?.join(','),
      materialId: params.materialId?.join(','),
      occasionId: params.occasionId?.join(','),
    }).filter(([_, value]) => value != null && value !== '')
  );

  const paramString = qs.stringify(filteredParams);
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await getProducts(paramString);
      return data.products
      },
    initialData: products ?? undefined,
  })
}