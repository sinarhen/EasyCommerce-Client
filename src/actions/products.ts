'use server'

import apiFetcher from "@/actions/api";
import {ProductsSearchParams} from "@/types/product";

export async function getProducts(params: ProductsSearchParams) {
  const endpointWithParams = `/products?${new URLSearchParams(params as any).toString()}`;
  const data = await apiFetcher("GET", endpointWithParams);
}

export async function getCategories() {
  const categories = await apiFetcher('GET', '/categories');
  return {
    categories: categories.data.categories
  }
}