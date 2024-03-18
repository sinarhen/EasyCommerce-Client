import {Button} from "@/components/ui/button";
import {Eye, LucideIcon} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

export default function CategoryCard({
  title,
  description,
  image,
  onClick,
  buttonText,
  buttonIcon
                                     }: {
  title: string,
  description: string,
  image?: string,
  onClick?: () => void
  buttonText?: string
  buttonIcon?: LucideIcon
}) {
  const Icon = buttonIcon ?? Eye;
  return (
    <div
      onClick={onClick}
      className="group  overflow-hidden cursor-pointer relative bg-gray-300 rounded-md min-w-[200px] h-[200px]">
      <div
        className=" flex-col justify-between flex group-hover:bg-black/90 transition-all px-4 py-5 bg-black/70 absolute rounded-md z-20 w-full h-full">
        <div>
          <h1 className="text-2xl font-bold text-gradient animate-gradient">{title}</h1>
          <p className="text-white">{description}</p>

        </div>
        <div className="flex justify-between w-full">
          <Button size={"sm"} variant="outline"
                  className='group-hover:translate-y-0 group/wish  transition-all opacity-0 group-hover:opacity-100 translate-y-3'>
            <div className="group-hover/wish:translate-x-0.5 transition-transform flex gap-x-2 ease-out ">
              <Icon size={iconSizes.md}></Icon>
              {buttonText ?? "View"}
            </div>
          </Button>
        </div>

      </div>
      <AspectRatio className="rounded-md" ratio={1}>
        {image ? (
          <Image src={image} fill alt="Image"
                 className="rounded-md transition-transform ease-out group-hover:scale-125 object-cover"/>

        ) : (
          <Image
            className="rounded-md scale-[101%] transition-transform ease-out group-hover:scale-125 object-cover"
            fill src={"https://i.pinimg.com/564x/0a/d5/16/0ad516d7ee2277fab0a7c37aecab1cb8.jpg"} alt="Image"/>
        )}
      </AspectRatio>
    </div>
  )
}