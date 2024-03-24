import {getProduct} from "@/actions/products";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import React from "react";
import Image from "next/image";
import {Header1, Header2} from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import CategoriesBreadcrumbs from "@/components/ui/skeletons/categories-breadcrumbs";
import {ProductDetailsDto} from "@/types/product";
import ProductDetailsCard from "@/app/store/products/[productId]/components/products-details-card";




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
      <CategoriesBreadcrumbs categories={product.categories}/>
      <ProductDetailsCard product={product}/>
      <div className="mt-4">
        <Header2>
          Information
        </Header2>
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between">
            <span>Price</span>
            <span className="font-bold">{product.minPrice} $</span>
          </div>
          <div className="flex justify-between">
            <span>Orders</span>
            <span className="font-bold">{product.ordersCount ?? 0}</span>
          </div>
          <div className="flex justify-between">
            <span>Reviews</span>
            <span className="font-bold">{product.reviewsCount ?? 0}</span>
          </div>
          <div className="flex justify-between">
            <span>Rating</span>
            <span className="font-bold">{product.avgRating}</span>
          </div>
        </div>
      </div>
    </div>
  )

}