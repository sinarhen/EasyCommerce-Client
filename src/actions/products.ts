'use server'

import apiFetcher from "@/actions/api";
import {ProductsResponse, ProductsSearchParams} from "@/types/product";

export async function getProducts(params?: string) {
  const products = await apiFetcher('GET', "/products" + (params ? ("?" + params) : ""))
  return products.data as ProductsResponse
}
export async function getCategori1es() {
  const categories = await apiFetcher('GET', '/categories');
  return {
    categories: categories.data.categories
  }
}