'use client'

import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {DollarSign, ShoppingBag} from "lucide-react";
import MaskContainer from "@/app/(root)/components/mask-container";
import ShoppingEarnings from "@/app/(root)/components/shopping-earnings";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import useMousePosition from "@/hooks/use-mouse-position";
import useMobileDetection from "@/hooks/use-mobile-detection";
import {partners} from "@/lib/constants";
import Link from "next/link";

const backgroundPaddingX = {
  _: 4,
  sm: 8,
  md: 16,
  lg: 28,
  xl: 52,
};
const backgroundPaddingY = {
  _: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 72,
};

const headerVariants = {
  hidden: {opacity: 0, x: -40},
  visible: {opacity: 1, x: 0}
};


const transitionDuration = 0.7;




export default function HomePageContent() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const mousePosition = useMousePosition(isMobile, containerRef);

  return (
    <>
      <motion.div
        ref={containerRef}
        className={cn(
          " text-6xl font-bold sm:text-6xl md:text-7xl w-full xl:text-8xl"
        )}
        animate={{
          backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
        }}
      >
        <div>
          {!isMobile && (
            <MaskContainer isMobile={isMobile} mousePosition={mousePosition} isHovered={isHovered}>
              <div
                className={cn(
                  `inline z-20 px-4  
                  text-center md:text-start
          md:px-12
          lg:px-28 
          xl:px-52 w-full sm:py-${backgroundPaddingY.sm} lg:py-${backgroundPaddingY.lg} md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} xl:py-${backgroundPaddingY.xl} `
                )}
              >
                <span className="dark:text-black">
                Welcome to

                </span>
                <div
                  className="text-gradient md:w-fit  animate-gradient"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {" EasyCommerce."}
                </div>
                <div
                  className={`text-sm w-full mt-2 px-[20%] md:px-0 md:w-1/3 font-medium text-gradient animate-gradient`}>
                  Your one-stop solution for all your ecommerce needs. Explore our wide range of products and become a
                  seller today.
                </div>
              </div>
            </MaskContainer>
          )}

          <div
            className={cn(
              `transition-all flex flex-col md:flex-row duration-300 h-full overflow-hidden font-bold dark:text-white w-full sm:py-${backgroundPaddingY.sm} lg:py-${backgroundPaddingY.lg} md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} xl:py-${backgroundPaddingY.xl} px-4  
          
          md:px-12
          lg:px-28 
          xl:px-52`
            )}
          >
            <div className="h-full text-center md:text-start sm:mt-12 md:mt-0  md:w-3/4">
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                transition={{duration: transitionDuration, delay: 0.3}}
              >
                Welcome to
              </motion.div>
              <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                transition={{duration: transitionDuration, delay: 0.5}}
                className="text-gradient  translate-x-12 animate-gradient">
                {" EasyCommerce."}
              </motion.div>

              <motion.div
                className={`text-sm font-medium px-[20%] md:px-0 w-full md:w-1/2 mt-2`}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: transitionDuration, delay: 0.8}}
              >
                Your one-stop solution for all your ecommerce needs. Explore our wide range of products and become a
                seller today.
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: transitionDuration, delay: 1}}
                className="flex relative flex-col sm:flex-row w-full mt-6 sm:mt-4  md:w-fit gap-x-2 z-10">
                <Link className="w-full flex" href={"/store"}>
                  <Button size="lg" variant="default" className="gap-x-2 w-full">
                    <ShoppingBag/> Shop Now
                  </Button>
                </Link>
                <span className="text-sm my-3 sm:hidden font-medium text-center ">or</span>
                <Link href={"/seller"} className="w-full flex" >
                  <Button size="lg" variant="outline" className="gap-x-2 w-full ">
                    <DollarSign/> Become a Seller
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: transitionDuration, delay: 1}}
              className=' mt-28 sm:mt-28 md:mt-32  w-full'>
              <ShoppingEarnings className="flex w-full justify-center md:justify-end" />
            </motion.div>
          </div>
          <div className={`
          h-full
          sm:flex 
          flex-col 
          md:flex-col-reverse
          font-medium 
          text-sm
          justify-center 
          hidden
          md:justify-end
          md:items-start 
          md:mt-7 
          lg:mt-10
          items-center 
          px-4  
          sm:px-8  
          md:px-16
          lg:px-28 
          xl:px-52
          `}>
            <div className="flex">
              <AnimatedTooltip items={partners}/>
            </div>
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: transitionDuration, delay: 1, type: "spring"}}
              className="ml-2 sm:text-xs mb-1 text-gray-800 lg:text-lg font-semibold mt-2">
              Our Partners
            </motion.div>
          </div>
        </div>

      </motion.div>
  </>
  )
};