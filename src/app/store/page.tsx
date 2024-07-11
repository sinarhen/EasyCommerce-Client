import {Header1} from "@/components/ui/header";
import React, {Suspense} from "react";
import ProductsSectionSkeleton from "@/app/store/components/products-section-skeleton";
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
        {/*<AnimatedCategories />*/}

      </Suspense>

      <Header1>
        Products
      </Header1>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>

      <Suspense fallback={
          <ProductsSectionSkeleton/>
        }>
        {/*<ProductsSection  />*/}
      </Suspense>
      <div className="flex justify-between">
        {/*<ProductsPageSizeSelector/>*/}
        {/*<ProductsPagination/>*/}
      </div>
    </div>
  );
}