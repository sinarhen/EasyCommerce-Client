import React from "react";
import {Header2} from "@/components/ui/header";
import Image from "next/image";
import {Check, ChevronDown, MessageSquareWarning, User} from "lucide-react";
import {iconSizes} from "@/lib/constants";
import ImageFrame from "@/components/ui/image-frame";
import {Button} from "@/components/ui/button";

export function ProductReviews({
                                 children
                               }: {
  children: React.ReactNode
}){
  return (

    <div className="mt-6">
      <Header2>
        Reviews
      </Header2>
      <div className="mt-4 flex flex-col gap-y-5">
        {children}
      </div>

    </div>

  )
}

export function ProductReviewCard() {
  return (

    <div className="grid grid-cols-12 gap-y-2 gap-x-1 w-full p-2 border rounded-md">
      <div className="col-span-12 flex text-sm ml-2 text-gray-300">
        5 days ago
      </div>
      <div className="col-span-1">
        <div className="  flex items-center justify-center overflow-hidden bg-white rounded-full">
          {0
            ? <Image width={100} height={100} src={""} alt={"nONE"}/>
            : <User strokeWidth={1.5} className="text-black w-3/4 h-3/4"/>
          }
        </div>
      </div>
      <div className="col-span-11 flex justify-between">
        <div>
          <div className="font-bold">
            {"User"}
          </div>
          <div className="text-sm font-thin text-gray-500">
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec odio nec urna aliquet ultricies  "}

          </div>
          <div className="flex cursor-pointer items-center">
                <span className='text-xs font-semibold'>
                  5 images attached
                </span>
            <ChevronDown size={iconSizes.xs}/>
          </div>
          <div className="flex mt-1 items-center gap-x-1 ">
            <div className="h-20 w-20">
              <ImageFrame alt='' src={""}/>
            </div>
            <div className="h-20 w-20">
              <ImageFrame alt='' src={""}/>
            </div>
            <div className="h-20 w-20">
              <ImageFrame alt="" src={""}/>
            </div>
            <div className="h-20 w-20">
              <ImageFrame alt="" src={""}/>
            </div>
            <div className="h-20 w-20">
              <ImageFrame alt="" src={""}/>
            </div>

          </div>
        </div>
        <div className="flex  gap-x-1">
          <div className="text-yellow-500">
            {'⭐'.repeat(4)}
          </div>
          <div className="text-gray-300">
            {'⭐'.repeat(1)}
          </div>
        </div>
      </div>
      <div className="col-span-3 mt-2">
        <div className="flex gap-x-1">

          <Button
            variant={"outline"}
            className="flex items-center gap-x-0.5"
            size={"sm"}
          >
            <Check size={iconSizes.sm}/>
            Helpful
          </Button>
          <Button
            variant="destructive"
            className="flex items-center gap-x-0.5"
            size="sm"
          >
            <MessageSquareWarning size={iconSizes.sm}/>
            Report
          </Button>

        </div>

      </div>

    </div>
  )
}
