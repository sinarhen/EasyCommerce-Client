import Image from "next/image";
import React from "react";

const testBackground = "https://assets.vogue.in/photos/629994f27c94c933ea0c62fb/2:3/w_2560%2Cc_limit/277416023_429623775635067_3047192132953835307_n.jpg"

export function CollectionCard() {
  return <div
    className="rounded relative overflow-hidden border dark:border-gray-300 group w-full h-[24vh] dark:bg-black drop-shadow-lg hover:-translate-y-0.5 hover:translate-x-0.5 ease-out transition-transform cursor-pointer bg-white">
    <div className="absolute w-1/2 h-full bg-white -z-10">
      <Image
        fill
        src={testBackground}
        alt=""
        className="h-full object-cover w-full"
      />
    </div>
    <div
      className="p-4 h-full text-right w-full flex flex-col hover:bg-black/10 transition-colors justify-between items-end">
      <div className="w-1/2 pl-2">
        <h3
          className="font-light text-2xl sm:text-lg truncate text-black mt-1 dark:text-white dark:group-hover:text-white">
          Collection name
        </h3>
        <p
          className="font-light text-sm text-gray-400 line-clamp-2 group-hover:text-gray-600 dark:hover:text-white dark:group-hover:text-white">
          Collection description
        </p>
        <p
          className="text-right text-gray-400 group-hover:text-gray-600 transition-colors dark:text-white dark:group-hover:text-white">
          <span
            className="font-semibold opacity-50 group-hover:opacity-90 transition-opacity text-gradient animate-gradient text-2xl">$100</span>
          <span className="text-xs"> - $200</span>
        </p>
      </div>
      <div
        className="w-full text-xs text-gray-400 group-hover:text-gray-600 transition-colors justify-between flex dark:hover:text-white dark:group-hover:text-white">
        <span className="text-black ">4 products</span>
        <span>Summer, Spring</span>
      </div>
    </div>
  </div>;
}