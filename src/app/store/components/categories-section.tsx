import AnimatedCategories from "@/app/store/components/animated-categories";
import {ProductService} from "@/lib/_api/client";

export default async function CategoriesSection(){
  const filters = await ProductService.getApiProductsFilters().catch(err => console.error(err))
  return (
    <>
      {filters?.categories && (
        <AnimatedCategories initialCategories={filters.categories}/>
      )}
    </>

  )
}