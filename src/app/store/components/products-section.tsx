import ProductsWrapper from "@/components/ui/products-wrapper";
import React from "react";
import {Header2, Header3, Header4} from "@/components/ui/header";
import {ProductsSearchParams} from "@/types/products";
import {ProductService} from "@/lib/_api/client";
import Products from "@/app/store/components/products";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function ProductsSection({
  params
                                              }: {
  params: ProductsSearchParams
}) {

  const response = (await ProductService.getApiProducts(
    params.orderBy,
    params.filterBy?.toString(),
    params.pageSize,
    params.pageNumber,
    params.searchTerm,
    params.categoryId,
    params.colorId,
    params.sizeId,
    params.collectionId,
    params.materialId,
    params.occasionId,
    params.minPrice,
    params.maxPrice,
  ).catch(err => console.log(err)));
  return (
    <>
      {/*<Filters filters={otherFilters}/>*/}
        {response && response.products ? (
          <ProductsWrapper>
            <Products data={response.products}/>
          </ProductsWrapper>
        ) : (
          <div className="flex flex-col items-center justify-center h-80 w-full ">
            <Header2>Products not found</Header2>
            <p>Please try to refresh the page or contact us</p>
            <Link  className="mt-4" href="/store">
              <Button variant="outline">
                Restart
              </Button>

            </Link>
          </div>
        ) }
    </>
  )
}