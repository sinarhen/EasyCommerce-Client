'use client'

import {ColorDto, ProductDetailsDto} from "@/types/product";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {Header1} from "@/components/ui/header";
import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";

export default function ProductDetailsCard({
                                             product
                                           }: {
  product: ProductDetailsDto
}) {
  const [selectedColor, setSelectedColor] = useState<ColorDto | undefined>(product.colors[0]);
  const [selectedSizeId, setSelectedSizeId] = useState<string | null>(null);

  // const [totalStock, setTotalStock] = useState<number>(0);
  //
  // useEffect(() => {
  //   setTotalStock(product.stocks.reduce((acc, stock) => acc + stock.stock, 0));
  // }, [product.stocks]);

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
          <p>
            {product.categories.map((category, index) => (
              <span key={index} className="text-gray-400">{category.name} </span>
            ))}
          </p>
          <Header1>
            {product.name.split(" ").slice(0, -1).join(" ") + " "}

            <span className="animate-gradient text-gradient">
              {product.name.split(" ").slice(-1)}
            </span>
          </Header1>
          <span className='mt-3'>
            Color:
            <span className='font-bold'>
            {" " + selectedColor?.name}

          </span>
          </span>
          <div className="flex gap-x-1 mt-1">

            {product.colors.map((color, index) => (
              <button onClick={() => setSelectedColor(color)} key={index} className={`w-8 h-8 border transition-all rounded-full ${selectedColor?.id === color.id ? "border-black dark:border-white": "border-gray-400"}`} style={{backgroundColor: color.hexCode}}></button>
            ))}
          </div>
          <hr className="h-px my-3 bg-gray-200 opacity-90 rounded-full bg-gradient animate-gradient border-0 "/>

        </div>
        <div>
          <span className="text-sm text-gray-400">
            Note: Select color and size to see the price
          </span>
          <div className={"flex w-full pb-2 overflow-auto gap-x-1"}>

            {product.sizes.sort((a, b) => {
              return a.value > b.value ? 1 : -1
            }).map((size, index) => (
              <Button key={index} onClick={() => {
                setSelectedSizeId(size.id)
              }} variant="outline" className={`w-12 h-12 transition-all flex-col ${size.id === selectedSizeId ? "dark:border-white border-black" : ""}`}>
                <div>
                  {size.name}
                </div>
                <div className="text-xs text-gray-400">
                  stock: {product.stocks.filter(stock => stock.sizeId === size.id).length}
                </div>
              </Button>
            ))}

          </div>
          <div className="flex md:flex-row flex-col-reverse md:items-end justify-between gap-x-2">
            <Button className="w-full md:w-auto">
              Buy
            </Button>
            <div className="flex text-lg mb-3 items-end gap-x-1 text-gray-400">
              Starting from{" "}
              <span className="text-gradient flex  text-2xl sm:text-lg md:text-2xl animate-gradient">
                ${selectedColor && selectedSizeId ? product.stocks.find(stock => stock.colorId === selectedColor.id && stock.sizeId === selectedSizeId)?.price : product.minPrice}
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
