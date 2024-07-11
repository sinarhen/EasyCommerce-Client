import ProductsWrapper from "@/components/ui/products-wrapper";
import {ProductCardSkeleton} from "@/components/ui/skeletons/product-card-skeleton";
import React from "react";

export default function ProductsSectionSkeleton(){

  return (
    <>
      {/*/!*<FiltersSkeleton></FiltersSkeleton>*!/ TODO*/}
      <ProductsWrapper>
        <ProductCardSkeleton></ProductCardSkeleton>
        <ProductCardSkeleton></ProductCardSkeleton>
        <ProductCardSkeleton></ProductCardSkeleton>
        <ProductCardSkeleton></ProductCardSkeleton>
      </ProductsWrapper>
    </>

  )
}