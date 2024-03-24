'use client'

import {ProductDetailsDto} from "@/types/product";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {Header1} from "@/components/ui/header";
import {Button} from "@/components/ui/button";
import React from "react";

export default function ProductDetailsCard({
                                             product
                                           }: {
  product: ProductDetailsDto
}) {
  return (
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
            {product.sizes.sort((a, b) => {
              return a.value > b.value ? 1 : -1
            }).map((size, index) => (
              <Button key={index} variant="outline" className="w-10 h-10">
                {size.name}
              </Button>
            ))}
          </div>
          <div className="flex items-end justify-between gap-x-2">
            <Button>
              Buy
            </Button>
            <div>
  <span className="text-gradient text-sm sm:text-lg md:text-2xl animate-gradient">
    {product.minPrice}$
    {/*if selected color and size find price in stocks(should be implemented on client side )*/}
  </span>
            </div>

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
  )
}
