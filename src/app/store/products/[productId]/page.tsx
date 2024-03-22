import {getProduct} from "@/actions/products";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import React from "react";
import Image from "next/image";
import Header from "@/components/ui/header";

export default async function ProductDetailsPage({
  params
                                                 }: {
  params: {
    productId: string
  }
}){
  const product = await getProduct(params.productId);
  return (
    <div className="w-full grid gap-x-3 gap-y-2 grid-cols-1 md:grid-cols-2">
      <div className="gap-y-1.5 flex flex-col">
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
        <div className="flex gap-x-1">
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
      <div className="w-full">
        <Header>
          {product.name.split(" ").slice(0, -1).join(" ") + " "}

          <span className="animate-gradient text-gradient">
              {product.name.split(" ").slice(-1)}
            </span>
        </Header>
        <span className='mt-3'>
          Color:
          <span className='font-bold'>
            {" " + product.colors[0].name}

          </span>
        </span>
        <div className="flex gap-x-1 mt-1">

          {product.colors.map((color, index) => (
            <button key={index} className="w-8 h-8 rounded-full" style={{backgroundColor: color.hexCode}}></button>
          ))}
        </div>
        <hr className="h-px my-3 bg-gray-200 opacity-90 rounded-full bg-gradient animate-gradient border-0 "/>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )

}