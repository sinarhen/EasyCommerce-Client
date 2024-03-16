import Header from "@/components/ui/header";
import apiFetcher from "@/actions/api";
import AnimatedProducts from "@/app/store/components/animated-products";
import { Filters } from "./components/filters";
import Image from "next/image";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Eye, Star} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import { Button } from "@/components/ui/button";


export async function getData() {
  const products = await apiFetcher('GET', '/products');
  return {
    products: products.data.products
  }
}

export default async function Store() {
  const {products} = await getData();
  return (
    <div className='w-full '>
      <div className="flex overflow-y-hidden mb-5 overflow-x-auto flex-wrap gap-x-2">
        <div className="group  overflow-hidden cursor-pointer relative bg-gray-300 rounded w-[200px] h-[200px]">
          <div className=" flex-col justify-between flex group-hover:bg-black/90 transition-all px-4 py-5 bg-black/70 absolute z-20 w-full h-full">
            <div>
              <h1 className="text-2xl font-bold text-gradient animate-gradient">Shirts</h1>
              <p className="text-white">Check out Shirts category</p>

            </div>
            <div className="flex justify-between w-full">
              <Button size={"sm"} variant="outline" className='group-hover:translate-y-0 group/wish  transition-all opacity-0 group-hover:opacity-100 translate-y-3'>
                <div className="group-hover/wish:translate-x-0.5 transition-transform flex gap-x-2 ease-out ">
                  <Eye size={iconSizes.md}></Eye>
                  View
                </div>
              </Button>
            </div>

          </div>
          <AspectRatio ratio={1}>
            <Image src={products[0]?.images[0]?.imageUrls[0]} fill alt="Image"
                   className="rounded-md transition-transform ease-out group-hover:scale-125 object-cover"/>
          </AspectRatio>
        </div>
        <div className="group  overflow-hidden cursor-pointer relative bg-gray-300 rounded w-[200px] h-[200px]">
          <div className="group-hover:bg-black/90 transition-all px-4 py-5 bg-black/70 absolute z-20 w-full h-full">
            <h1 className="text-2xl font-bold text-gradient animate-gradient">Blouses</h1>
            <p className="text-white">Check out Shirts category</p>
          </div>
          <AspectRatio ratio={1}>
            <Image src={products[2]?.images[0]?.imageUrls[0]} fill alt="Image"
                   className="rounded-md transition-transform ease-out group-hover:scale-125 object-cover"/>
          </AspectRatio>
        </div>
      </div>
      <Header>
        Products
      </Header>

      <hr className="h-px my-3 bg-gray-200 rounded-full bg-gradient animate-gradient border-0 "/>
      <Filters/>

      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <AnimatedProducts products={products}/>
      </div>
    </div>
  );
}