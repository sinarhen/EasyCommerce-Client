import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

export default function ImageFrame({
                             src
                           }:
                             {src: string}){
  return (
    <div className="bg-gradient flex items-center justify-center overflow-hidden rounded animate-gradient p-px">
      <AspectRatio ratio={1}>
        <Image
          className='object-cover rounded w-full h-full'
          fill
          src={src}
          alt={"No image"}

        />
      </AspectRatio>

    </div>

  )

}