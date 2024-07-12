'use client'

import {AnimatePresence, motion} from "framer-motion";
import ProductCard from "@/components/ui/product-card";
import React from "react";
import { ProductDto } from "@/lib/_api/client";

export default function Products({data}: {
  data: ProductDto[]
}){
  return (
    <AnimatePresence mode="wait">
      {(data?.length ?? 0) > 0 && data?.map((product: ProductDto, index) => (
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
  )
}