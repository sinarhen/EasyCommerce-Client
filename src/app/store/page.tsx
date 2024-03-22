import Header from "@/components/ui/header";
import AnimatedProducts from "@/app/store/components/animated-products";
import {Filters} from "./components/filters";
import React from "react";
import AnimatedCategories from "@/app/store/components/animated-categories";
import {getProducts} from "@/actions/products";
import {ProductsPagination} from "@/app/store/components/products-pagination";
import ProductsPageSizeSelector from "@/app/store/components/products-page-size-selector";

export default async function Store() {

  const {products, filters} = await getProducts();
  const {categories, ...otherFilters} = filters
  return (
    <div className='w-full '>
      <AnimatedCategories initialCategories={categories}/>

      <Header>
        Products
      </Header>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>

      <Filters filters={otherFilters}/>
      <AnimatedProducts initialProducts={products}/>
      <div className="flex justify-between">
        <ProductsPageSizeSelector/>
        <ProductsPagination/>
      </div>
    </div>
  );
}