import {Header1} from "@/components/ui/header";
import React from "react";
import ProductsWrapper from "@/components/ui/products-wrapper";
import {ProductCardSkeleton} from "@/components/ui/skeletons/product-card-skeleton";

const testBackground = "https://assets.vogue.in/photos/629994f27c94c933ea0c62fb/2:3/w_2560%2Cc_limit/277416023_429623775635067_3047192132953835307_n.jpg"

function CollectionCard() {
  return <div className="rounded relative overflow-hidden border dark:border-gray-300 group w-full h-[24vh] dark:bg-black drop-shadow-lg hover:-translate-y-0.5 hover:translate-x-0.5 ease-out transition-transform cursor-pointer bg-white">
    <div className="absolute w-1/2 h-1/2 bg-white -z-10">
      <img
        src={testBackground}
        alt=""
      />
    </div>
    <div className="p-4 h-full w-full flex flex-col bg-black/50 justify-between">
      <div>
        <h3 className="font-light text-right text-2xl sm:text-lg line-clamp-1 text-black mt-1 dark:text-white dark:group-hover:text-white">Collection name</h3>
        <p className="font-light text-gray-400 group-hover:text-gray-600 text-right dark:hover:text-white dark:group-hover:text-white">
          Collection description
        </p>
        <p className="text-right text-gray-400 group-hover:text-gray-600 transition-colors dark:text-white dark:group-hover:text-white">
          <span className="font-semibold opacity-40 group-hover:opacity-90 transition-opacity text-gradient animate-gradient text-2xl">$100</span>
          <span className="text-xs"> - $200</span>
        </p>
      </div>
      <div className="w-full text-xs text-gray-400 group-hover:text-gray-600 transition-colors justify-between flex dark:hover:text-white dark:group-hover:text-white">
        <span>4 products</span>
        <span>Summer, Spring</span>
      </div>
    </div>
  </div>;
}

export default function Page() {

  return (
    <div className="w-full">
      <Header1>
        Collections
      </Header1>
      <p className="mb-4 text-gray-400">
        4 items
      </p>
      <ProductsWrapper className="w-full">
        <CollectionCard/>
      </ProductsWrapper>

    </div>
  );
}