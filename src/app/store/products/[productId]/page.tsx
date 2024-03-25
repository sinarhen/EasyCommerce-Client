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
      <div className="mt-4">
        <Header2>
          Information
        </Header2>
        <div className="flex font-thin text-lg flex-col gap-y-1">
          <p>
            {product.description}
          </p>
          <span className="flex flex-col transition-all group gap-x-1">
            <div className="flex gap-x-1 items-center">
              <Sun className="transition-all group-hover:rotate-[120deg]" size={iconSizes.md}/>
              <span className='group-hover:translate-x-2 transition-transform'>
                {product.season}
              </span>
            </div>
            <div className="group-hover:h-full group-hover:text-white transition-all h-full">
              {seasonsDescriptions[product.season] }
            </div>
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