import {Header1} from "@/components/ui/header";
import React from "react";
import ProductsWrapper from "@/components/ui/products-wrapper";
import {CollectionCard} from "@/app/store/collections/components/collection-card";


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