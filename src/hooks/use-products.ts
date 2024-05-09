import {ProductDto} from "@/types/product";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getProducts} from "@/actions/products";
import {initialState, useParamsStore} from "@/hooks/use-params-store";
import qs from "querystring";
import { useEffect, useState, useMemo, useCallback } from "react";

const defaultParamString = "pageNumber=1&pageSize=12&orderBy=2&minPrice=0&maxPrice=0&filterBy=live"

export default function useProducts(initialProducts?: ProductDto[], token?: string): UseQueryResult<ProductDto[]>{
  const params = useParamsStore(state => state);
  const [paramString, setParamString] = useState(defaultParamString);

  const filteredParams = useMemo(() => {
    if (params === initialState) return defaultParamString;

    const filtered = Object.fromEntries(
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

    return qs.stringify(filtered);
  }, [params]);

  const queryFn = useCallback(async () => {
    const data = await getProducts(paramString, token);
    return data.products;
  }, [paramString, token]);

  const query = useQuery({
    queryKey: ["products", paramString],
    queryFn,
    initialData: initialProducts,
  });

  useEffect(() => {
    setParamString(filteredParams);
  }, [filteredParams]);

  return query;
}