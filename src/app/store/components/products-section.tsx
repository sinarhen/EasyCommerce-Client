import ProductsWrapper from "@/components/ui/products-wrapper";
import React from "react";
import Products from "@/app/store/components/products";
import {getProducts} from "@/actions/products";
import {cookies} from "next/headers";
import {tokenKeyString} from "@/lib/constants";

export default async function ProductsSection() {
  const token = cookies().get(tokenKeyString)?.value;
  const response = (await getProducts(undefined, token));
  return (
    <>
      {/*<Filters filters={otherFilters}/>*/}
      <ProductsWrapper>
        {/*<Products data={response.products}/>*/}
      </ProductsWrapper>
    </>
  )
}