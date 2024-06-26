import {Header1} from "@/components/ui/header";
import AnimatedProducts from "@/app/store/components/animated-products";
import {Filters} from "./components/filters";
import React from "react";
import AnimatedCategories from "@/app/store/components/animated-categories";
import {getProducts} from "@/actions/products";
import {ProductsPagination} from "@/app/store/components/products-pagination";
import ProductsPageSizeSelector from "@/app/store/components/products-page-size-selector";
import { cookies } from "next/headers"
import {tokenKeyString} from "@/lib/constants";


export default async function Store() {
  const token = cookies().get(tokenKeyString)
  const {products, filters} = await getProducts(undefined, token?.value);
  const {categories, ...otherFilters} = filters
  return (
    <div className='w-full min-h-screen '>
      <AnimatedCategories initialCategories={categories}/>

      <Header1>
        Products
      </Header1>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>

      <Filters filters={otherFilters}/>
      <AnimatedProducts token={token?.value} initialProducts={products}/>
      <div className="flex justify-between">
        <ProductsPageSizeSelector/>
        <ProductsPagination/>
      </div>
    </div>
  );
}