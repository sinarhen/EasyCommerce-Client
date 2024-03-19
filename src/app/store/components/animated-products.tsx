'use client';

import {ProductDto} from "@/types/product";
import ProductCard from "@/components/ui/product-card";
import {AnimatePresence, motion} from "framer-motion";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getProducts} from "@/actions/products";

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

  if (!products || products.length === 0) return (
    <div className="w-full h-full flex justify-center items-center">
      No products
    </div>
  )
  return (
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
  )
}