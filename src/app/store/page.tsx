import Header from "@/components/ui/header";
import AnimatedProducts from "@/app/store/components/animated-products";
import {Filters} from "./components/filters";
import React from "react";
import AnimatedCategories from "@/app/store/components/animated-categories";
import {getProducts} from "@/actions/products";

export default async function Store() {

  const {products, filters} = await getProducts();
  return (
    <div className='w-full '>
      <AnimatedCategories initialCategories={filters.categories}/>

      <Header>
        Products
      </Header>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>

      <Filters/>

      <AnimatedProducts initialProducts={products}/>
    </div>
  );
}