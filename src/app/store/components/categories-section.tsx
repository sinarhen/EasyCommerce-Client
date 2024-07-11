import {getProducts} from "@/actions/products";
import AnimatedCategories from "@/app/store/components/animated-categories";

export default async function CategoriesSection(){

  const categories =
    (await getProducts()).filters.categories;

  return (
    <>
      {categories.length === 0 && (
        <AnimatedCategories initialCategories={categories}/>

      )}
    </>

  )
}