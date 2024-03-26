import {getProduct} from "@/actions/products";
import React from "react";
import {Header2} from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import ProductDetailsCard from "@/app/store/products/[productId]/components/products-details-card";
import Link from "next/link";
import {
  ArrowBigLeft,
  ArrowDown,
  Check,
  ChevronDown,
  InspectionPanel,
  MessageSquareWarning,
  Shirt,
  Sun,
  User
} from "lucide-react";
import {iconSizes, seasonsDescriptions} from "@/lib/constants";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import ProductInformation from "@/app/store/products/[productId]/components/product-information";
import Image from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import ImageFrame from "@/components/ui/image-frame";




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
      <ProductInformation
        {...product}
      />
      <div className="mt-6 ">
        <Header2>
          Reviews
        </Header2>
        <div className="grid grid-cols-12 gap-y-2 gap-x-1 w-full p-2 border rounded-md">
          <div className="col-span-12 flex text-sm ml-2 text-gray-300">
            5 days ago
          </div>
          <div className="col-span-1">
            <div className="  flex items-center justify-center overflow-hidden bg-white rounded-full">
              {0
                ? <Image width={100} height={100} src={""} alt={"nONE"}/>
                : <User strokeWidth={1.5} className="text-black w-3/4 h-3/4"/>
              }
            </div>
          </div>
          <div className="col-span-11 flex justify-between">
            <div>
              <div className="font-bold">
                {"User"}
              </div>
              <div className="text-sm font-thin text-gray-500">
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna aliquet ultricies  "}

              </div>
              <div className="flex cursor-pointer items-center">
                <span className='text-xs font-semibold'>
                  5 images attached
                </span>
                <ChevronDown size={iconSizes.xs}/>
              </div>
              <div className="flex mt-1 items-center gap-x-1 ">
                <div className="h-20 w-20">
                  <ImageFrame alt='' src={""}/>
                </div>
                <div className="h-20 w-20">
                  <ImageFrame alt='' src={""}/>
                </div>
                <div className="h-20 w-20">
                  <ImageFrame alt="" src={""}/>
                </div>
                <div className="h-20 w-20">
                  <ImageFrame alt="" src={""}/>
                </div>
                <div className="h-20 w-20">
                  <ImageFrame alt="" src={""}/>
                </div>

              </div>
            </div>
            <div className="flex  gap-x-1">
              <div className="text-yellow-500">
                {'⭐'.repeat(4)}
              </div>
              <div className="text-gray-300">
                {'⭐'.repeat(1)}
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-2">
            <div className="flex gap-x-1">

              <Button
                variant={"outline"}
                className="flex items-center gap-x-0.5"
                size={"sm"}
              >
                <Check size={iconSizes.sm}/>
                Helpful
              </Button>
              <Button
                variant="destructive"
                className="flex items-center gap-x-0.5"
                size="sm"
              >
                <MessageSquareWarning size={iconSizes.sm} />
                Report
              </Button>

            </div>

          </div>

        </div>
      </div>

    </div>
  )

}