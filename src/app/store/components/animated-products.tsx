'use client';

import {ProductDto} from "@/types/product";
import ProductCard from "@/components/ui/product-card";
import {AnimatePresence, motion} from "framer-motion";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getProducts} from "@/actions/products";
import ProductsWrapper from "@/components/ui/products-wrapper";
import React from "react";
import {ProductCardSkeleton} from "@/components/ui/skeletons/product-card-skeleton";

function useProducts(): UseQueryResult<ProductDto[]>{
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await getProducts();
      return data.products
    }
  })
}

export default function AnimatedProducts() {
  const {data: products, error, isLoading} = useProducts();

  if (isLoading){
    return (
      <ProductsWrapper>
        <ProductCardSkeleton></ProductCardSkeleton>
        <ProductCardSkeleton></ProductCardSkeleton>
        <ProductCardSkeleton></ProductCardSkeleton>
        <ProductCardSkeleton></ProductCardSkeleton>
      </ProductsWrapper>
    )
  }
  if (!products || products.length === 0) return (
    <div className="w-full h-full flex justify-center items-center">
      No products
    </div>
  )
  if (error){

    return (
      <div className="w-full h-full flex justify-center items-center">
        Error
      </div>
    )
  }
  return (
    <ProductsWrapper >
      <AnimatePresence>
        {products.length > 0 && products.map((product: ProductDto, index) => (
          <motion.div
            key={product.id}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 10}}
            transition={{duration: 0.2, delay: index * 0.1}}
            className="w-full"

          >
            <ProductCard
              product={product}

            />

          </motion.div>
        ))}
      </AnimatePresence>
    </ProductsWrapper>
    )
}