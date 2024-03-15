'use server'

import apiFetcher from "@/actions/api";
import {ProductsSearchParams} from "@/types/product";

export async function getProducts(params: ProductsSearchParams) {
  const endpointWithParams = `/products?${new URLSearchParams(params as any).toString()}`;
  console.log(endpointWithParams)
  const data = await apiFetcher("GET", endpointWithParams);
  console.log(data)
}