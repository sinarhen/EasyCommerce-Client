import {Header1} from "@/components/ui/header";
import React, {Suspense} from "react";
import ProductsSectionSkeleton from "@/app/store/components/products-section-skeleton";
import ProductsSection from "@/app/store/components/products-section";
import CategoriesSection from "@/app/store/components/categories-section";
import CategoriesSectionSkeleton from "@/app/store/components/categories-section-skeleton";
import {ProductsSearchParams} from "@/types/products";

// export const experimental_ppr = true; TODO: Update next.js version

export default async function Store({searchParams}: {
  searchParams: ProductsSearchParams
}) {
  return (
    <div className='w-full h-full'>
      <Suspense fallback={
        <CategoriesSectionSkeleton/>
      }>
        <CategoriesSection />

      </Suspense>

      {/*<Header1>*/}
      {/*  Products*/}
      {/*</Header1>*/}

      {/*<hr className="h-px mt-1 mb-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>*/}

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