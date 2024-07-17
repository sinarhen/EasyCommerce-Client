'use client';


import {Button} from "@/components/ui/button";
import {Bookmark, Info, PersonStanding, Shirt, ShoppingCart, Star, Sun} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import Image from "next/image";
import {useEffect, useMemo, useState} from "react";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useRouter} from "next/navigation";
import useWishlist from "@/hooks/use-wishlist";
import {ColorDto, ProductDto} from "@/lib/_api/client";


export default function ProductCard({
                                      product,
                                    }: {
  product: ProductDto
}) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(product.images?.at(0)?.imageUrls?.at(0))
  const [selectedColor, setSelectedColor] = useState<ColorDto | undefined>(product.colors?.at(0));

  const [imageIsLoading, setImageIsLoading] = useState(true);
  const {toggleWish, wishList} = useWishlist();

  const isWished = wishList.hasOwnProperty(product.id!) ? wishList[product.id!] : product.isFavorite;

  const router = useRouter();
  useEffect(() => {
    if (selectedColor) {
      setSelectedImage(product?.images?.find(image => image.colorId == selectedColor?.id)?.imageUrls?.at(0))
    }
  }, [product.images, selectedColor])


  return (
    <div className="group border-black/[0.1] dark:border-white/[0.1] border relative">
      {/*{product.isNew && (*/}
      {/*  <div className="absolute -top-3 -left-4 px-2 py-1 z-20 bg-purple-800 rounded bg-opacity-90 text-sm">New</div>*/}
      {/*)}*/}
      <div className="bg-white dark:bg-neutral-950 text-black dark:text-white overflow-hidden rounded w-full flex-col flex h-full drop-shadow-lg ">
        <div onClick={() => router.push(`/store/products/${product.id}`)}
             className="relative cursor-pointer group min-h-[300px] overflow-hidden w-full bg-gray-300 ">
          <div
            className="absolute transition-all duration-300 bg-black/0  flex flex-col gap-y-2  w-full h-full group-hover:bg-black/40 z-10  items-center justify-center">
            <Button
              onClick={(e) => {
                e.stopPropagation()
                toggleWish(product.id!, product.isFavorite ?? false)
              }}
              size={"sm"} variant="ghost"
                    className='group-hover:translate-y-0 absolute right-2 top-2 group/wish transition-all translate-y-3'>
              <div className="">
                <Bookmark fill={isWished ? "black" : "transparent"} size={iconSizes.lg}></Bookmark>
              </div>
            </Button>

            <Button size={"sm"} variant="ghost"
                    className='group-hover:translate-y-0 group/info transition-all opacity-0 group-hover:opacity-100 translate-y-3'>
              <div className="group-hover/info:translate-x-0.5 transition-transform flex gap-x-2 ease-out ">
                <Info size={iconSizes.md}></Info>
                Details
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
          <div className=" flex justify-center gap-x-1 w-full text-black absolute bottom-2">
            {(product.colors?.length !== 0 ? product.images?.filter(image => image.colorId == selectedColor?.id) : product.images)?.map((image, index) => (
              <div key={index}
                   onClick={() => setSelectedImage(image.imageUrls?.at(0))}
                   className={`w-2 h-2 ${selectedImage ? (image.imageUrls?.includes(selectedImage) ? "bg-gray-500" : "bg-gray-300") : ""} rounded-full cursor-pointer`}/>


            ))}
          </div>
        </div>
        <div className="flex mt-3 px-4 items-center w-full justify-between">
          <h3 className="font-light text-2xl sm:text-lg line-clamp-1 mt-1">{product.name}</h3>


        </div>
        {/*<hr className="h-px dark:bg-gray-800 my-1"/>*/}
        <div className="justify-self-end px-4 flex justify-between items-center">
          <span className=" text-gradient animate-gradient  text-lg ">${product.minPrice}</span>
          <div>
            <Button size={"sm"} variant="outline" className='mt-2 opacity-80 hover:opacity-100 group'>

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
            {product.colors?.length ?? 0 > 0 ? product.colors?.map((color, index) => (
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
          className="w-full text-black dark:text-white pb-4 px-4 mt-3  justify-between flex flex-col font-semibold text-xs">

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
          {product.occasion?.name}

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