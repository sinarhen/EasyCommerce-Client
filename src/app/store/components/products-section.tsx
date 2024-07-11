import {ProductDto} from "@/types/product";
import ProductCard from "@/components/ui/product-card";
import {AnimatePresence, motion} from "framer-motion";
import ProductsWrapper from "@/components/ui/products-wrapper";
import React from "react";
import {getProducts} from "@/actions/products";

export default async function ProductsSection({token}: {
  token?: string
}) {

  const {products: data, filters} = await getProducts(undefined, token);
  const {categories, ...otherFilters} = filters
  return (

    <>
      {/*<Filters filters={otherFilters}/>*/}
      <ProductsWrapper>
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
      </ProductsWrapper>
    </>

  )
}