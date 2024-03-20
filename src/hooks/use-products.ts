import {ProductDto} from "@/types/product";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getProducts} from "@/actions/products";

export default function useProducts(products: ProductDto[]): UseQueryResult<ProductDto[]>{
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await getProducts();
      return data.products
    },
    initialData: () => {
      return products;
    }
  })
}