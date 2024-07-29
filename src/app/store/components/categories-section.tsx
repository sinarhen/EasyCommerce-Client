import AnimatedCategories from "@/app/store/components/animated-categories";
import {Category, ProductService} from "@/lib/_api/client";


export default async function CategoriesSection(){
  const allCategories = (await ProductService.getApiProductsFilters().catch(err => console.error(err)))?.categories


  return (
    <>
        <AnimatedCategories categories={allCategories}  />
    </>

  )
}