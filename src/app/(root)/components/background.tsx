'use client'

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Store } from "lucide-react";

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
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);

  const maskSize = isHovered ? 900 : 0; // revealSize from MaskContainer
  const children = (
    <div className={`text-sm text-orange-600`}>
      Explore wide range of products with our free and easy to use platform.
    </div>
  );

  return (
    <div
      className="md:h-max h-[40rem] md:text-start w-full py-32 md:py-32 dark:bg-black bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      <motion.div
        ref={containerRef}
        className={cn(
          "h-3/4 text-5xl font-bold sm:4xl md:text-6xl w-full lg:text-7xl xl:text-8xl"
        )}
        animate={{
          backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
        }}
      >
        <div>
          <motion.div
            className={
              "w-full h-full flex   absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
            }
            animate={{
              WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
                mousePosition.y - maskSize / 2
              }px`,
              WebkitMaskSize: `${maskSize}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
          >
            <div className="absolute  bg-black h-full w-full z-10 opacity-50" />
            <div
              className={cn(
                "inline   font-bold z-20 px-4 w-full md:py-16 py-4 md:w-3/4"
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
              {children}
            </div>
          </motion.div>

          <div
            className={cn(
              "w-full h-full  inline items-center font-bold dark:text-white w-3/4 md:w-3/4 w-full md:py-16 py-4 px-4"
            )}
          >
            Explore wide range of products with
            <span className="text-gradient animate-gradient">
              {" EasyCommerce."}
              {children}
            </span>
          </div>
        </div>
      </motion.div>
      <div className={`px-4 py-4 md:py-6 lg:py-8 xl:py-10`}>
        <Button size="lg" variant="default" className="absolute flex gap-x-2 z-10">
          <ShoppingBag /> Shop Now
        </Button>
      </div>
    </div>
  );
}