import {ProductDto} from "@/types/product";
import {useQuery, UseQueryResult, useQueryClient} from "@tanstack/react-query";
import {getProducts} from "@/actions/products";
import {useParamsStore} from "@/hooks/use-params-store";
import qs from "querystring";
import { useEffect, useState } from "react";

export default function useProducts(products?: ProductDto[]): UseQueryResult<ProductDto[]>{
  const params = useParamsStore(state => state);
  const [paramString, setParamString] = useState('');

  useEffect(() => {
    const filteredParams = Object.fromEntries(
      Object.entries({
        categoryId: params.categories?.length !== 0 ? params.categories![params.categories!.length - 1].id : undefined,
        pageNumber: params.pageNumber,
        pageSize: params.pageSize,
        searchTerm: params.searchTerm,
        orderBy: params.orderBy,
        minPrice: params.minPrice,
        maxPrice: params.maxPrice,
        filterBy: params.filterBy,
        colorId: params.colors?.map(c => c.id).join(','),
        sizeId: params.sizes?.map(s => s.id).join(','),
        collectionId: params.collections?.map(c => c.id).join(','),
        materialId: params.materials?.map(m => m.id).join(','),
        occasionId: params.occasions?.map(o => o.id).join(','),
      }).filter(([_, value]) => value != null && value !== '')
    );

    setParamString(qs.stringify(filteredParams));
  }, [params]);

  return useQuery({
    queryKey: ["products", paramString],
    queryFn: async () => {
      if (!paramString){
        return [];
      }
      const data = await getProducts(paramString);
      return data.products;
    },
    initialData: products ?? undefined,
  });
}