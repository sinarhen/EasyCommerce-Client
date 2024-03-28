'use client';


import {ColorDto, ProductDto} from "@/types/product";
import {Button} from "@/components/ui/button";
import {PersonStanding, Shirt, ShoppingCart, Star, Sun} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useRouter} from "next/navigation";
import CategoriesBreadcrumbs from "@/components/ui/skeletons/categories-breadcrumbs";


export default function ProductCard({
                                      product,
                                    }: {
  product: ProductDto
}) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(product.images[0].imageUrls[0])
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<ColorDto | undefined>(product.colors[0]);

  const router = useRouter();
  useEffect(() => {
    if (selectedColor) {
      setSelectedImage(product.images.find(image => image.colorId == selectedColor?.id)?.imageUrls[0])
    }
  }, [product.images, selectedColor])

  return (
    <div className="group relative ">
      <div className="bg-white  w-full flex-col flex h-full drop-shadow-lg ">
        {product.isNew && (
          <div className="absolute -top-3 -left-4 px-2 py-1 z-20 bg-purple-800 rounded bg-opacity-90 text-sm">New</div>
        )}


        <div onClick={() => router.push(`/store/products/${product.id}`)}
             className="relative cursor-pointer group min-h-[300px] overflow-hidden w-full bg-gray-300 ">
          <div
            className="absolute transition-all duration-300 delay-500 opacity-0 group-hover:opacity-100  flex  top-0 left-0 w-full h-full bg-black/40 z-10  items-center justify-center">
            <Button size={"sm"} variant="outline"
                    className='group-hover:translate-y-0 group/wish  transition-all opacity-0 delay-500 group-hover:opacity-100 translate-y-3'>
              <div className="group-hover/wish:translate-x-0.5 transition-transform flex gap-x-2 ease-out ">
                <Star size={iconSizes.md}></Star>
                Wishlist
              </div>
            </Button>
          </div>

          {selectedImage ? <Image
              className={`${imageIsLoading ? "animate-pulse bg-gray-200 blur-md" : ""} transition-all object-cover group-hover:scale-110 `}
              loading="lazy"
              onError={() => setImageIsLoading(false)}
              onLoad={() => setImageIsLoading(false)}
              src={selectedImage}
              fill
              alt={"No image"}/>
            : (
              <span className="w-full h-full flex items-center justify-center text-black/40">
            No image
          </span>
            )}
          {/*image*/}
          {/*<div className='absolute text-center text-lg p-2 text-nowrap bg-gray-500 top-0 right-0  w-16 h-16 flex justify-center items-center opacity-40 hover:opacity-100 transition-all rounded'>*/}
          {/*    5 <br/>sizes*/}
          {/*</div>*/}
          <div className=" flex justify-center gap-x-1 w-full text-black absolute bottom-2">
            {(product.colors.length !== 0 ? product.images.filter(image => image.colorId == selectedColor?.id) : product.images).map((image, index) => (
              <div key={index}
                   onClick={() => setSelectedImage(image.imageUrls[0])}
                   className={`w-2 h-2 ${selectedImage ? (image.imageUrls.includes(selectedImage) ? "bg-gray-500" : "bg-gray-300") : ""} rounded-full cursor-pointer`}/>


            ))}
          </div>
        </div>
        <div className="flex mt-3 px-4 items-center w-full justify-between">
          <h3 className="font-light text-2xl sm:text-lg line-clamp-1 text-black mt-1">{product.name}</h3>
          <CategoriesBreadcrumbs
            className={'text-xs'}
            categories={product.categories}/>

        </div>
        <hr className="h-px my-1"/>
        <div className="justify-self-end px-4 flex justify-between items-center">
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

        <div className="px-4 w-full flex justify-start">

          <div
            className="flex w-full gap-x-1 ">
            {product.colors.length > 0 ? product.colors.map((color, index) => (
              <Tooltip key={color.id}>
                <TooltipTrigger>
                  <div
                    onClick={() => setSelectedColor(color)}
                    className="sm:w-6 w-10 h-10 sm:h-6 border border-gray-300 opacity-90 hover:opacity-100 hover:scale-125 transition-all  cursor-pointer rounded-full"
                    style={{backgroundColor: color.hexCode}}/>

                </TooltipTrigger>
                <TooltipContent>
                  {color.name.normalize()}
                </TooltipContent>
              </Tooltip>
            )) : (
              <span className="h-6 flex text-sm text-center w-full italic items-center">No colors</span>
            )}
          </div>
        </div>

        <div
          className="w-full text-black dark:text-black pb-4 px-4 mt-3 bg-white justify-between flex flex-col font-semibold text-xs">

        <span
          className=" opacity-40 hover:opacity-100 w-full transition-opacity cursor-pointer items-center flex justify-between ">
          <div className="flex gap-x-1 items-center">
            <Sun
              size={iconSizes.sm}/>
            Season
          </div>
          {product.season}

        </span>

          <span
            className=" opacity-40 hover:opacity-100 w-full transition-opacity cursor-pointer items-center flex justify-between ">
          <div className="flex gap-x-1 items-center">
          <Shirt
            size={iconSizes.sm}/>
            Occasion
          </div>
            {product.occasion.name}

        </span>

          <span
            className=" opacity-40 hover:opacity-100 w-full transition-opacity cursor-pointer items-center flex justify-between ">
          <div className="flex gap-x-1 items-center">
          <PersonStanding
            size={iconSizes.sm}
          />
            Gender
          </div>
            {product.gender}

        </span>
        </div>

      </div>

    </div>

  )
}