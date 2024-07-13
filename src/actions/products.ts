'use server'
//
// import apiFetcher from "@/actions/api";
// import {ProductDetailsDto, ProductsResponse, ProductsSearchParams} from "@/types/product";
//
// export async function getProducts(params?: string, token?: string): Promise<ProductsResponse> {
//   const products = await apiFetcher.get("/products" + (params ? ("?" + params) : ""), token)
//   return products?.data
// }
//
// export async function getProduct(id: string, token?: string): Promise<ProductDetailsDto> {
//   const product = await apiFetcher.get("/products/" + id, token)
//   return product?.data
// }

import {CustomerService, OpenAPI} from "@/lib/_api/client";
import {cookies} from "next/headers";

export async function addWish(productId: string, token: string) {
  OpenAPI.TOKEN = token;
  return CustomerService.postApiCustomerWishlist({
    productId
  })
}

export async function removeWish(productId: string, token: string) {
  OpenAPI.TOKEN = token;
  return CustomerService.deleteApiCustomerWishlist({productId})
}