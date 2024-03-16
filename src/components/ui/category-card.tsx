import {Button} from "@/components/ui/button";
import {Eye} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function CategoryCard({
                               title,
                               description,
                               image,
                             }: {
  title: string,
  description: string,
  image: string

}) {
  return (
    <div className="group  overflow-hidden cursor-pointer relative bg-gray-300 rounded w-[200px] h-[200px]">
      <div
        className=" flex-col justify-between flex group-hover:bg-black/90 transition-all px-4 py-5 bg-black/70 absolute z-20 w-full h-full">
        <div>
          <h1 className="text-2xl font-bold text-gradient animate-gradient">{title}</h1>
          <p className="text-white">{description}</p>

        </div>
        <div className="flex justify-between w-full">
          <Button size={"sm"} variant="outline"
                  className='group-hover:translate-y-0 group/wish  transition-all opacity-0 group-hover:opacity-100 translate-y-3'>
            <div className="group-hover/wish:translate-x-0.5 transition-transform flex gap-x-2 ease-out ">
              <Eye size={iconSizes.md}></Eye>
              View
            </div>
          </Button>
        </div>

      </div>
      <AspectRatio ratio={1}>
        <Image src={image} fill alt="Image"
               className="rounded-md transition-transform ease-out group-hover:scale-125 object-cover"/>
      </AspectRatio>
    </div>
  )
}