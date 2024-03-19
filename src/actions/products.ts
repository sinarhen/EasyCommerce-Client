'use server'

import apiFetcher from "@/actions/api";
import {ProductsSearchParams} from "@/types/product";


export async function getProducts() {
  const products = await apiFetcher('GET', '/products');
  return {
    products: products.data.products
  }
}
export async function getCategories() {
  const categories = await apiFetcher('GET', '/categories');
  return {
    categories: categories.data.categories
  }
}