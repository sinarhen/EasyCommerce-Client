import {CategoryDto, ProductDto} from "@/types/product";
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
        colorId: params.colorId?.join(','),
        sizeId: params.sizeId?.join(','),
        collectionId: params.collectionId?.join(','),
        materialId: params.materialId?.join(','),
        occasionId: params.occasionId?.join(','),
      }).filter(([_, value]) => value != null && value !== '')
    );

    setParamString(qs.stringify(filteredParams));
  }, [params]);

  return useQuery({
    queryKey: ["products", paramString],
    queryFn: async () => {
      const data = await getProducts(paramString);
      return data.products;
    },
    initialData: products ?? undefined,
  });
}