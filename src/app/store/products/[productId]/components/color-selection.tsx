import {ColorDto} from "@/types/product";
import React from "react";

export const ColorSelection = ({colors, selectedColor, setSelectedColor}: {
  colors: ColorDto[],
  selectedColor: ColorDto | undefined,
  setSelectedColor: (color: ColorDto) => void
}) => (
  <div className="flex gap-x-1.5 md:gap-x-1 ">
    {colors.map((color, index) => (
      <button onClick={() => setSelectedColor(color)} key={index}
              className={`w-12 h-12 sm:h-10 sm:w-10  border transition-all rounded-full ${selectedColor?.id === color.id ? "border-black dark:border-white" : "border-gray-400"}`}
              style={{backgroundColor: color.hexCode}}></button>
    ))}
  </div>
);