import React from "react";

export default function CategoryCardSkeleton() {
  return (
    <div
      className="animate-pulse  relative bg-gray-300 dark:bg-black rounded min-w-[200px] h-[200px]">
      <div
        className="flex-col justify-between flex transition-all px-4 py-5  absolute z-20 w-full h-full">

        <div>
          <h1 className=" h-6 rounded-lg bg-gradient animate-gradient w-3/4"></h1>
          <p className="text-white h-4 bg-white  mt-2 rounded-lg animate-pulse"></p>

        </div>

      </div>

    </div>
  )
}