'use client';

import {ProductDto} from "@/types/product";
import ProductCard from "@/components/ui/product-card";
import {AnimatePresence, motion} from "framer-motion";

export default function AnimatedProducts({products}: {
  products: ProductDto[]
}) {
  if (!products || products.length === 0) return (
    <div className="w-full h-full flex justify-center items-center">
      No products
    </div>
  )
  return (
    <AnimatePresence mode="wait">
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
    )
}