import ProductsWrapper from "@/components/ui/products-wrapper";
import React from "react";
import {getProducts} from "@/actions/products";
import {cookies} from "next/headers";
import {tokenKeyString} from "@/lib/constants";
import {Header4} from "@/components/ui/header";
import {ProductsSearchParams} from "@/types/product";

export default async function ProductsSection({
  params
                                              }: {
  params: ProductsSearchParams
}) {
  const token = cookies().get(tokenKeyString)?.value;
  const response = (await getProducts(undefined, token));
  return (
    <>
      {/*<Filters filters={otherFilters}/>*/}
      <ProductsWrapper>
        {response?.products ? (
          <>
            {/*<Products data={response.products}/>*/}

          </>

        ) : (
          <div className="flex align-center text-center h-400">
            <Header4>
              Not found
            </Header4>
          </div>
        ) }
      </ProductsWrapper>
    </>
  )
}