import {getProduct} from "@/actions/products";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import React from "react";
import Image from "next/image";
import {Header1, Header2} from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import CategoriesBreadcrumbs from "@/components/ui/skeletons/categories-breadcrumbs";
import {ProductDetailsDto} from "@/types/product";
import ProductDetailsCard from "@/app/store/products/[productId]/components/products-details-card";
import Link from "next/link";
import {ArrowBigLeft, ArrowDown, ChevronDown, InspectionPanel, Shirt, Sun} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";




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
            <ArrowBigLeft size={iconSizes.md} />
            Back
          </span>

        </Button>

      </Link>
      <ProductDetailsCard product={product}/>
      <div className="mt-4">
        <Header2>
          Information
        </Header2>
        <div className="flex font-thin text-lg flex-col gap-y-1">
          <p>
            {product.description}
          </p>
          <span className="flex items-center gap-x-1">
            <Sun size={iconSizes.md}/>
            {product.season}
          </span>
          <span className="flex items-center gap-x-1">
            <Shirt size={iconSizes.md}/>
            {product.occasion.name}
          </span>
          <span className="flex items-center gap-x-1">
            <Sun size={iconSizes.md}/>
            {product.collection.name}
          </span>
          <div>
            <Collapsible>
              <CollapsibleTrigger>

                <div className="flex gap-x-1 items-center">
                  <InspectionPanel size={iconSizes.md}/>
                  Materials
                  <ChevronDown size={iconSizes.md}/>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="pl-7">
                  {product.materials.map((material, index) => (
                    <li key={index}>
                      {material.name} - {material.percentage * 100}%
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>

          </div>

        </div>
      </div>
    </div>
  )

}