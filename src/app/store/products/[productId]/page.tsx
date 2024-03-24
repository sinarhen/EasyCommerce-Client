import {getProduct} from "@/actions/products";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import React from "react";
import Image from "next/image";
import {Header1, Header2} from "@/components/ui/header";
import { Button } from "@/components/ui/button";

export default async function ProductDetailsPage({
  params
                                                 }: {
  params: {
    productId: string
  }
}){
  const [product] = await Promise.all([getProduct(params.productId)]);
  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full md:justify-start">
        {product.categories.map((category, index) => (
          <span key={index} className="text-2xl md:text-sm text-gray-500">
            <button className="hover:underline" >
              {category.name}

            </button>
            {(index !== product.categories.length - 1 ? " > " : "")}
          </span>
        ))}
      </div>
      <div
      className="w-full grid gap-x-3 gap-y-2 grid-cols-1 md:grid-cols-2  ">
        <div className="gap-y-1.5 row-span-1 flex items-center md:items-start flex-col">
          <div className="w-3/4 md:w-full rounded p-[0.05rem] animate-gradient bg-gradient ">
            <AspectRatio ratio={1}>
              <Image
                className='rounded object-cover w-full h-full'
                fill
                src={product.images[0].imageUrls[0]}
                alt={"No image"}

              />
            </AspectRatio>

          </div>
        </div>
        <div className="flex row-span-1 flex-col  md:h-full md:justify-between w-full">
          <div>
            <Header1>
              {product.name.split(" ").slice(0, -1).join(" ") + " "}

              <span className="animate-gradient text-gradient">
              {product.name.split(" ").slice(-1)}
            </span>
            </Header1>
            <span className='mt-3'>
              Color:
              <span className='font-bold'>
                {" " + product.colors[0]?.name}

              </span>
            </span>
            <div className="flex gap-x-1 mt-1">

              {product.colors.map((color, index) => (
                <button key={index} className="w-8 h-8 rounded-full" style={{backgroundColor: color.hexCode}}></button>
              ))}
            </div>
            <hr className="h-px my-3 bg-gray-200 opacity-90 rounded-full bg-gradient animate-gradient border-0 "/>
            <p className="italic">{product.description}</p>

          </div>
          <div>
            <div className={"flex w-full pb-1 overflow-auto gap-x-1"}>
              {product.sizes.map((size, index) => (
                <Button key={index} variant="outline" className="w-10 h-10">
                  {size.name}
                </Button>
              ))}
            </div>
            <div className="flex items-end gap-x-2 justify-end">
              <div>
              <span className="text-xs">
                  Starting from{" "}
                </span>
                <span className="text-gradient text-sm animate-gradient">
                  {product.minPrice}$
                </span>
              </div>
              <Button>
                Buy
              </Button>

            </div>
          </div>

        </div>
        <div className="md:flex  hidden row-start-2 h-fit gap-x-1">
          {product.images.map((image, index) => (
            <div key={index} className="w-1/4 rounded p-[0.05rem] animate-gradient bg-gradient">
              <AspectRatio ratio={1}>
              <Image
                  className='rounded object-cover w-full h-full'
                  fill
                  src={image.imageUrls[0]}
                  alt={"No image"}

                />
              </AspectRatio>
            </div>
          ))}
        </div>

      </div>
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