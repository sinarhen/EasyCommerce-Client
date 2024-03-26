import {getProduct} from "@/actions/products";
import React from "react";
import { Button } from "@/components/ui/button";
import ProductDetailsCard from "@/app/store/products/[productId]/components/products-details-card";
import Link from "next/link";
import {
  ArrowBigLeft,
} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import ProductInformation from "@/app/store/products/[productId]/components/product-information";
import {ProductReviewCard, ProductReviews } from "./components/product-reviews";



export default async function ProductDetailsPage({
                                                   params
                                                 }: {
  params: {
    productId: string
  }
}) {
  const [product] = await Promise.all([getProduct(params.productId)]);
  return (
    <div className="w-full h-full">
      <Link href="/store">
        <Button
          variant={"outline"}
          className="mb-4 group"
        >
          <span className="flex transition-transform items-center group-hover:-translate-x-2">
            <ArrowBigLeft size={iconSizes.md}/>
            Back
          </span>

        </Button>

      </Link>
      <ProductDetailsCard product={product}/>
      <ProductInformation
        {...product}
      />
      <ProductReviews>
        <ProductReviewCard/>
        <ProductReviewCard/>
        <ProductReviewCard/>
        <ProductReviewCard/>
        <ProductReviewCard/>
      </ProductReviews>

    </div>
  )

}