import ProductsWrapper from "@/components/ui/products-wrapper";
import React from "react";
import {Header4} from "@/components/ui/header";
import {ProductsSearchParams} from "@/types/products";
import {ProductService} from "@/lib/_api/client";
import Products from "@/app/store/components/products";

export default async function ProductsSection({
  params
                                              }: {
  params: ProductsSearchParams
}) {
  const response = (await ProductService.getApiProducts(
    undefined,
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
  ));
  return (
    <>
      {/*<Filters filters={otherFilters}/>*/}
      <ProductsWrapper>
        {response ? (
          <>
            <Products data={response}/>

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