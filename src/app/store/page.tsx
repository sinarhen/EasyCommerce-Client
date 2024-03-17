import Header from "@/components/ui/header";
import apiFetcher from "@/actions/api";
import AnimatedProducts from "@/app/store/components/animated-products";
import { Filters } from "./components/filters";
import React, {Suspense} from "react";
import AnimatedCategories from "@/app/store/components/animated-categories";
import CategoriesWrapper from "@/components/ui/categories-wrapper";
import {Button} from "@/components/ui/button";
import {Eye} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import CategoryCardSkeleton from "@/components/ui/skeletons/category-card-skeleton";

export async function getData() {
  const products = await apiFetcher('GET', '/products');
  return {
    products: products.data.products
  }
}

export default async function Store() {
  const {products} = await getData();
  return (
    <div className='w-full '>
      {/*<ErrorBoundary errorComponent={ErrorComponentWrapper}>*/}

      <Suspense fallback={
        <CategoriesWrapper>
          <div className="group  overflow-hidden cursor-pointer relative bg-gray-300 rounded min-w-[200px] h-[200px]">

          </div>
        </CategoriesWrapper>

      }>

        <CategoriesWrapper>
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
          <CategoryCardSkeleton />
        </CategoriesWrapper>

      </Suspense>

      <Header>
        Products
      </Header>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>
      <Filters/>

      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatedProducts products={products}/>
      </div>
    </div>
  );
}