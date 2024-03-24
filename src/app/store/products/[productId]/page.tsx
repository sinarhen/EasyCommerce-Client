import {getProduct} from "@/actions/products";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import React from "react";
import Image from "next/image";
import {Header1, Header2} from "@/components/ui/header";

export default async function ProductDetailsPage({
  params
                                                 }: {
  params: {
    productId: string
  }
}){
  const [product] = await Promise.all([getProduct(params.productId)]);
  return (
    <div>
      <div className="flex ">
        {product.categories.map((category, index) => (
          <span key={index} className="text-sm text-gray-500">
            <button className="hover:underline" >
              {category.name}

            </button>
            {(index !== product.categories.length - 1 ? " > " : "")}
          </span>
        ))}
      </div>
      <div
      className="w-full grid gap-x-3 gap-y-2 grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-1 grid-template-areas='image description images' md:grid-template-areas='image description . images'">
        <div className="gap-y-1.5 row-span-1 flex flex-col">
          <div className="w-full rounded p-[0.05rem] animate-gradient bg-gradient ">
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
        <div className="flex row-span-1 flex-col justify-between h-full w-full">
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
            asd
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

      </div>
    </div>
  )

}