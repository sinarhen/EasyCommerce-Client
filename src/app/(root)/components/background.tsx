'use client'

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {DollarSign, ShoppingBag} from "lucide-react";

const backgroundPaddingX = {
  _: 4,
};
const backgroundPaddingY = {
  _: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 72,
};

export default function GridSmallBackgroundDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener(
            "mousemove",
            updateMousePosition
          );
        }
      };
    }
  }, [isMobile]);


  const maskSize = isHovered && !isMobile ? 300 : 0; // revealSize from MaskContainer

  const animations = !isMobile ? {
    animate: {
    WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
      mousePosition.y - maskSize / 2
    }px`,
      WebkitMaskSize: `${maskSize}px`,
  },
    transition: { type: "tween", ease: "backOut", duration: 0.1 }
  } : {};

  return (
    <div
      className="md:h-max duration-700 transition-colors overflow-hidden h-[40rem] md:text-start w-full py-32 md:py-32 dark:bg-black bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      <motion.div
        ref={containerRef}
        className={cn(
          "h-3/4 text-6xl font-bold sm:text-6xl md:text-7xl w-full xl:text-8xl"
        )}
        animate={{
          backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
        }}
      >
        <div>

          {!isMobile && (
            <motion.div
              {...animations}
              className={
                "w-full h-full flex absolute bg-black  bg-grid-white/[0.2] dark:bg-white dark:bg-grid-black/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
              }
            >
              <div className={cn(`absolute  bg-black h-full w-full z-10 opacity-50`, isMobile ? "hidden" : "")} />
              <div
                className={cn(
                  `inline z-20 px-${backgroundPaddingX._} w-full md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} md:w-3/4`
                )}
              >
                Explore wide range of products with
                <span
                  className="text-gradient animate-gradient"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                {" EasyCommerce."}
              </span>
                <div className={`text-sm font-medium text-gradient animate-gradient`}>
                  Explore wide range of products with our
                  free and easy to use platform.
                </div>
              </div>
            </motion.div>


          )}

          <div
            className={cn(
              `transition-colors duration-300 h-full items-center overflow-hidden font-bold dark:text-white md:w-3/4 w-full md:py-16 py-4 px-${backgroundPaddingX._}`
            )}
          >
            Explore wide range of products with
            <span className="text-gradient animate-gradient">
              {" EasyCommerce."}
            </span>

              <div className={`text-sm font-medium`}>
                Explore wide range of products with our
                free and easy to use platform.
              </div>

            <div className="flex relative flex-col sm:flex-row w-full mt-6 sm:mt-4  sm:w-fit gap-x-2 z-10">
              <Button size="lg" variant="default" className="gap-x-2 w-full ">
                <ShoppingBag /> Shop Now
              </Button>
                <span className="text-sm my-3 sm:hidden font-medium text-center ">or</span>
              <Button size="lg" variant="outline" className="gap-x-2 w-full ">
                <DollarSign /> Become a Seller
              </Button>

            </div>
          </div>
        </div>

      </motion.div>

    </div>
  );
}