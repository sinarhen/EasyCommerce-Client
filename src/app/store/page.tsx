import {Header1} from "@/components/ui/header";
import React, {Suspense} from "react";
import ProductsSectionSkeleton from "@/app/store/components/products-section-skeleton";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";
import ProductsSection from "@/app/store/components/products-section";
import AnimatedCategories from "@/app/store/components/animated-categories";
import {ProductsSearchParams} from "@/types/product";
import CategoriesSection from "@/app/store/components/categories-section";
import CategoriesSectionSkeleton from "@/app/store/components/categories-section-skeleton";

// export const experimental_ppr = true; TODO: Update next.js version

export default async function Store({searchParams}: {
  searchParams: ProductsSearchParams
}) {
  return (
    <div className='w-full min-h-screen '>
      <Suspense fallback={

        <CategoriesSectionSkeleton/>
      }>
        <CategoriesSection />

      </Suspense>

      <Header1>
        Products
      </Header1>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>

      <Suspense fallback={
          <ProductsSectionSkeleton/>
        }>
        <ProductsSection params={searchParams} />
      </Suspense>
      <div className="flex justify-between">
        {/*<ProductsPageSizeSelector/>*/}
        {/*<ProductsPagination/>*/}
      </div>
    </div>
  );
}