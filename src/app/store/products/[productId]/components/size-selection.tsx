import {SizeDto} from "@/types/product";
import {Button} from "@/components/ui/button";
import React from "react";

export const SizeSelection = ({sizes, selectedSize, setSelectedSize, stockForSize}: {
  sizes: SizeDto[],
  selectedSize: SizeDto | null,
  setSelectedSize: (size: SizeDto) => void,
  stockForSize: (sizeId: string) => any
}) => (
  <div className={"flex w-full justify-center md:justify-start overflow-auto gap-x-1"}>
    {sizes.sort((a, b) => a.value > b.value ? 1 : -1).map((size, index) => {
      const stock = stockForSize(size.id);
      return (
        <div key={stock?.colorId! + stock?.sizeId!} className="flex flex-col gap-y-1">
          <Button
            disabled={stock?.price === 0}
            onClick={() => setSelectedSize(size)} variant="ghost"
            className={`w-14 h-14 border relative flex justify-between overflow-hidden transition-all flex-col ${size.id === selectedSize?.id ? "dark:border-white border-black" : ""}`}>
            {(stock?.discount && stock?.discount > 0) ? (
              <div className="absolute bg-red-500 rounded text-[9px] right-0 text-center -top-1 h-4 w-4">
                %
              </div>
            ) : null}
            <div>
              {size.name}
            </div>
            <div className={`${stock?.discount !== 0 ? "text-[10px] line-through " : "text-xs"} text-gray-400`}>
              {stock?.price ? "$ " + stock?.price : "N/A"}
            </div>
          </Button>
        </div>
      )
    })}
  </div>
);