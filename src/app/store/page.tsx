import Header from "@/components/ui/header";
import apiFetcher from "@/actions/api";
import AnimatedProducts from "@/app/store/components/animated-products";
import { Filters } from "./components/filters";
import React from "react";
import CategoryCard from "@/components/ui/category-card";


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
      <div className="flex overflow-y-hidden mb-5 overflow-x-auto flex-wrap gap-x-2">
        <CategoryCard
          title="Shirts"
          description="A collection of shirts"
          image={products[0].images[0].imageUrls[0]}
        />
        <CategoryCard
          title="Blouses"
          description="A collection of Blouses"
          image={products[2].images[0].imageUrls[0]}
        />
      </div>
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