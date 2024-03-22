

import {getProduct} from "@/actions/products";
import AnimatedCategories from "@/app/store/components/animated-categories";

export default async function ProductDetailsPage({
  params
                                                 }: {
  params: {
    productId: string
  }
}){
  const product = await getProduct(params.productId);
  console.log(product)
  return (
    <div className="w-full">


    </div>
  )

}