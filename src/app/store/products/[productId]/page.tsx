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
import {TUser} from "@/types/user";


const testReviews = [
  {
    createdAt: "2021-09-01",
    user: {
      username: "John Doe",
    } as TUser,
    content: "This is the best product ever",
    rating: 5,
  },
  {
    createdAt: "2021-09-01",
    user:{
      username: "Jane Doe",
    } as TUser,
    content: "This is good",
    rating: 4
  },
  {
    createdAt: "2021-09-01",
    user: {
      username: "Jack Doe",
    } as TUser,
    content: "This is okay",
    rating: 3
  },
]
export default async function ProductDetailsPage({
                                                   params
                                                 }: {
  params: {
    productId: string
  }
}) {
  const [product] = await Promise.all([getProduct(params.productId)]);
  return (
    <div className="w-full flex flex-col gap-y-10 h-full">
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
        {testReviews.map((review, index) => (
          <ProductReviewCard
            key={index}
            {...review}
          />
        ))}
      </ProductReviews>

    </div>
  )

}