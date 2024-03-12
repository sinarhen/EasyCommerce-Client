'use client';


import {ProductDto} from "@/types/product";
import {Button} from "@/components/ui/button";
import {Backpack, PersonStanding, ShoppingCart, Star, Sun} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import Image from "next/image";
import {useState} from "react";

export default function ProductCard({
  product,
                                    }: {
  product: ProductDto
}) {
  const [selectedImage, setSelectedImage] = useState(product.images[0].imageUrls[0])
  console.log(product.colors)
  return (
    <div className="group relative">
      <div className="bg-white group-hover:absolute w-full flex-col flex h-full rounded-md drop-shadow-lg p-4">
        {product.isNew && (
          <div className="absolute -top-3 -left-4 px-2 py-1 z-20 bg-purple-800 rounded bg-opacity-90 text-sm">New</div>
        )}


        <div className="relative min-h-[300px] overflow-hidden w-full bg-gray-300 rounded">
          <div className="absolute top-3 right-1 flex w-full items-end justify-end gap-x-2 z-40  transition-opacity rounded hover:bg-opacity-100 ">
            {product.colors.map((color, index) => (
              <div key={index} className="w-4 h-4 rounded-full" style={{backgroundColor: color.hexCode}}/>
            ))}
          </div>
          <div
            className="absolute flex sm:text-xs text-lg   rounded-2xl text-gray-400 font-semibold items-center gap-x-1 top-2 left-2 sm:left-1">
            <Star size={iconSizes.md} className="h-full w-full"/>
            4.5

          </div>
          <Image
            className="object-cover hover:scale-110 transition-transform"
            quality={80}
            src={selectedImage}
            fill
            alt={"None"}/>
          {/*image*/}
          {/*<div className='absolute text-center text-lg p-2 text-nowrap bg-gray-500 top-0 right-0  w-16 h-16 flex justify-center items-center opacity-40 hover:opacity-100 transition-all rounded'>*/}
          {/*    5 <br/>sizes*/}
          {/*</div>*/}
          <div className=" flex justify-center gap-x-1 w-full text-black absolute bottom-2">
            {product.images.map((image, index) => (
              <div key={index}
                   onClick={() => setSelectedImage(image.imageUrls[0])}
                   className={`w-2 h-2 ${image.imageUrls.includes(selectedImage) ? "bg-gray-500" : "bg-gray-300"} rounded-full cursor-pointer`}/>


            ))}
          </div>
        </div>
        <div className="flex mt-3 items-center w-full justify-between">
          <h3 className="font-light text-2xl sm:text-lg line-clamp-1 text-black mt-1">{product.name}</h3>
          <div className="flex gap-x-1 text-xs items-center h-full text-gray-400 ">
            {product.categories.reverse().map((category, index) => (
              <span key={category.id}
                    className="text-gray-400">{category.name}{index !== product.categories.length - 1 && ","}</span>
            ))}
          </div>
        </div>
        <hr className="h-px my-1"/>
        <div className="justify-self-end flex justify-between items-center">
          <span className=" text-gradient animate-gradient  text-lg ">${product.minPrice}</span>
          <div>
            <Button size={"sm"} variant="outline" className='mt-2 group'>

              <div className="hover:translate-x-0.5  transition-transform flex gap-x-2 ease-out ">
                <ShoppingCart size={iconSizes.md}></ShoppingCart>
                To cart
              </div>

            </Button>

          </div>
        </div>

        {/*<div className="w-full absolute mt-3 bg-white justify-between flex items-center font-semibold text-xs">*/}
        {/*<span*/}
        {/*  className="text-orange-300 opacity-40 hover:opacity-100 transition-opacity cursor-pointer items-center flex gap-x-1.5"><Sun*/}
        {/*  size={iconSizes.sm}/> {product.season}</span>*/}
        {/*  <span*/}
        {/*    className="text-black flex opacity-40 hover:opacity-100 transition-opacity cursor-pointer items-center gap-x-1"><Backpack*/}
        {/*    size={iconSizes.sm}/> {product.occasion.name}</span>*/}
        {/*  <span*/}
        {/*    className="text-blue-800 flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer gap-x-1"><PersonStanding*/}
        {/*    size={iconSizes.sm}/> {product.gender}</span>*/}
        {/*</div>*/}

      </div>

    </div>

  )
}