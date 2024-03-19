'use server'

import apiFetcher from "@/actions/api";
import {ProductsResponse, ProductsSearchParams} from "@/types/product";


export async function getProducts() {
  const products = await apiFetcher('GET', '/products');
  return products.data as ProductsResponse
}
export async function getCategories() {
  const categories = await apiFetcher('GET', '/categories');
  return {
    categories: categories.data.categories
  }
}