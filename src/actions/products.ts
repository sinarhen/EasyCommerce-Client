'use server'

import apiFetcher from "@/actions/api";
import {ProductsResponse, ProductsSearchParams} from "@/types/product";

export async function getProducts(params?: string) {
  const products = await apiFetcher('GET', "/products" + (params ? ("?" + params) : ""))
  return products.data as ProductsResponse
}