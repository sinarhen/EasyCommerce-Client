'use server'

import apiFetcher from "@/actions/api";
import {ProductDetailsDto, ProductsResponse, ProductsSearchParams} from "@/types/product";

export async function getProducts(params?: string): ProductsResponse {
  const products = await apiFetcher.get("/products" + (params ? ("?" + params) : ""))
  return products.data
}

export async function getProduct(id: string): ProductDetailsDto {
  const product = await apiFetcher.get("/products/" + id)
  return product.data
}