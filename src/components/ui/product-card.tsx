import {ProductDto} from "@/types/product";
import {Button} from "@/components/ui/button";
import {Backpack, PersonStanding, ShoppingCart, Star, Sun} from "lucide-react";
import {iconSizes} from "@/lib/constants";

export default function ProductCard({
  product,
                                    }: {
  product?: ProductDto
}) {
  return (
    <div className="bg-white relative flex-col flex h-[600px] sm:h-[450px] rounded-md shadow-md p-4">
      <div className="absolute -top-3 -left-4 px-2 py-1 z-20 bg-purple-800 rounded bg-opacity-90 text-sm">New</div>
      <div className="relative h-[70%] w-full bg-gray-300 rounded">
        <div className="absolute flex sm:text-xs text-lg   rounded-2xl text-gray-400 font-semibold items-center gap-x-1 top-2 left-2 sm:left-1">
          <Star size={iconSizes.md} className="h-full w-full"/>
          4.5

        </div>
        {/*image*/}
        {/*<div className='absolute text-center text-lg p-2 text-nowrap bg-gray-500 top-0 right-0  w-16 h-16 flex justify-center items-center opacity-40 hover:opacity-100 transition-all rounded'>*/}
        {/*    5 <br/>sizes*/}
        {/*</div>*/}
        <div className=" flex justify-center gap-x-1 w-full text-black absolute bottom-2">
          <span className="bg-gray-400 w-2 h-2 rounded-full"></span>
          <span className="bg-black w-2 h-2 rounded-full"></span>
          <span className="bg-gray-400 w-2 h-2 rounded-full"></span>
        </div>
      </div>
      <div className="w-full mt-0.5 justify-between flex items-center font-semibold text-xs">
        <span
          className="text-orange-300 opacity-40 hover:opacity-100 transition-opacity cursor-pointer items-center flex gap-x-1.5"><Sun
          size={iconSizes.sm}/> Summer</span>
        <span
          className="text-black flex opacity-40 hover:opacity-100 transition-opacity cursor-pointer items-center gap-x-1"><Backpack
          size={iconSizes.sm}/> Casual</span>
        <span
          className="text-blue-800 flex items-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer gap-x-1"><PersonStanding
          size={iconSizes.sm}/> Unisex</span>
      </div>
      <div className="flex items-center w-full justify-between">
        <h3 className="font-light text-2xl sm:text-xl text-black mt-1">Casual T-Shirt</h3>
        <div className="flex text-xs items-center h-full text-gray-400 ">
          <p>T-Shirts,</p>
          &nbsp;
          <p>Shirts</p>
        </div>
      </div>

      <p className="text-gray-400 line-clamp-3 sm:line-clamp-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
      </p>
      <div className="mt-4 justify-self-end flex justify-between items-center">
        <span className=" text-gradient animate-gradient  text-lg ">$100.00</span>
        <div>
          <Button size={"sm"} variant="outline" className='group'>

            <div className="group-hover:translate-x-0.5  transition-transform flex gap-x-2 ease-out ">
              <ShoppingCart size={iconSizes.md}></ShoppingCart>
              To cart
            </div>

          </Button>

        </div>
      </div>
    </div>

  )
}