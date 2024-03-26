import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

export default function ImageFrame({
                             src,
                             alt
                           }:
                             {
  src: string;
  alt?: string
}){
  return (
    <div className="bg-gradient w-full h-full flex items-center justify-center overflow-hidden rounded animate-gradient p-[0.05rem]">
      <AspectRatio ratio={1} className="bg-gray-300/80 rounded">
        <Image
          className='object-cover rounded w-full h-full'
          fill

          src={src}
          alt={alt??"none"}

        />
      </AspectRatio>

    </div>

  )

}