import Header from "@/components/ui/header";
import apiFetcher from "@/actions/api";
import AnimatedProducts from "@/app/store/components/animated-products";
import { Filters } from "./components/filters";
import React from "react";
import CategoryCard from "@/components/ui/category-card";
import AnimatedCategories from "@/app/store/components/animated-categories";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ui/error-component";

export async function getData() {
  const products = await apiFetcher('GET', '/products');
  return {
    products: products.data.products
  }
}
const ErrorComponentWrapper = ({ message }: { message: string }) => <ErrorComponent message={message} />;


export async function getCategories() {
  const categories = await apiFetcher('GET', '/categories');
  return {
    categories: categories.data.categories
  }
}

export default async function Store() {
  const {products} = await getData();
  const {categories} = await getCategories();
  console.log(categories)
  return (
    <div className='w-full '>
      {/*<ErrorBoundary errorComponent={ErrorComponentWrapper}>*/}
        <AnimatedCategories categories={categories}/>
      {/*</ErrorBoundary>*/}
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