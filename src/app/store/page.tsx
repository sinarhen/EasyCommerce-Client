import {Header1} from "@/components/ui/header";
import ProductsSection from "@/app/store/components/products-section";
import {Filters} from "./components/filters";
import React, {Suspense} from "react";
import AnimatedCategories from "@/app/store/components/animated-categories";
import {getProducts} from "@/actions/products";
import {ProductsPagination} from "@/app/store/components/products-pagination";
import ProductsPageSizeSelector from "@/app/store/components/products-page-size-selector";
import { cookies } from "next/headers"
import {tokenKeyString} from "@/lib/constants";
import ProductsWrapper from "@/components/ui/products-wrapper";
import {ProductCardSkeleton} from "@/components/ui/skeletons/product-card-skeleton";
import ProductsSectionSkeleton from "@/app/store/components/products-section-skeleton";
import {getCurrentUser} from "@/actions/auth";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";

// export const experimental_ppr = true; TODO: Update next.js version

export default async function Store() {
  return (
    <div className='w-full min-h-screen '>
      <Suspense fallback={
        <CategoriesWrapper>
          <CategoryCardSkeleton/>
          <CategoryCardSkeleton/>
          <CategoryCardSkeleton/>
          <CategoryCardSkeleton/>
        </CategoriesWrapper>

      }>
        <AnimatedCategories />

      </Suspense>

      <Header1>
        Products
      </Header1>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>

      <Suspense fallback={
          ProductsSectionSkeleton()
        }>
        <ProductsSection  />
      </Suspense>
      <div className="flex justify-between">
        <ProductsPageSizeSelector/>
        <ProductsPagination/>
      </div>
    </div>
  );
}