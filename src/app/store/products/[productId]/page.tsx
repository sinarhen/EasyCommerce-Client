import {getProduct} from "@/actions/products";
import React from "react";
import {Header2} from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import ProductDetailsCard from "@/app/store/products/[productId]/components/products-details-card";
import Link from "next/link";
import {ArrowBigLeft, ArrowDown, ChevronDown, InspectionPanel, Shirt, Sun} from "lucide-react";
import {iconSizes, seasonsDescriptions} from "@/lib/constants";
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

    </div>
  )

}