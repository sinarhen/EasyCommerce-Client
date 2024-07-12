import AnimatedCategories from "@/app/store/components/animated-categories";
import {ProductService} from "@/lib/_api/client";

export default async function CategoriesSection(){

  const categories = await (ProductService.getApiProductsFilters()
    .then((res) => res.categories)
    .catch(err => console.error(err)));

  return (
    <>
      {categories?.length === 0 && (
        <AnimatedCategories initialCategories={categories}/>

      )}
    </>

  )
}