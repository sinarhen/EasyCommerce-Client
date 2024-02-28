'use client'

import React, {memo, useEffect, useRef, useState} from "react";
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

const headerVariants = {
  hidden: { opacity: 0, x: -40},
  visible: { opacity: 1,x: 0}
};

const transitionDuration = 0.7;

function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
  }, []);

  return isMobile;
}

interface MousePosition {
  x: number | null;
  y: number | null;
}

function useMousePosition(isMobile: boolean, containerRef: React.RefObject<HTMLDivElement>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  useEffect(() => {
    if (!isMobile && containerRef.current) {
      const updateMousePosition = (e: MouseEvent) => {
        const rect = containerRef?.current?.getBoundingClientRect();
        if (rect)
        {
          setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
      };

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
  }, [isMobile, containerRef]);

  return mousePosition;
}

interface MaskContainerProps {
  isMobile: boolean;
  mousePosition: MousePosition;
  isHovered: boolean;
  children: React.ReactNode;
}

const MaskContainer = memo(({ isMobile, mousePosition, isHovered, children }: MaskContainerProps) => {
  const maskSize = isHovered && !isMobile ? 300 : 0;

  const animations = !isMobile ? {
    animate: {
      WebkitMaskPosition: `${mousePosition?.x ? mousePosition.x - maskSize / 2 : 0}px ${
        mousePosition?.y ? mousePosition.y - maskSize / 2 : 0
      }px`,
      WebkitMaskSize: `${maskSize}px`,
    },
    transition: { type: "tween", ease: "backOut", duration: 0.1 }
  } : {};

  return (
    <motion.div
      {...animations}
      className={
        "w-full h-full flex absolute bg-black  bg-grid-white/[0.2] dark:bg-white dark:bg-grid-black/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
      }
    >
      {children}
    </motion.div>
  );
});

MaskContainer.displayName = "MaskContainer";

export default function GridSmallBackgroundDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const mousePosition = useMousePosition(isMobile, containerRef);

  return (
    <div
      className="md:h- duration-700 transition-colors overflow-hidden flex items-center text-center h-screen md:text-start w-full  dark:bg-black bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
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
            <MaskContainer isMobile={isMobile} mousePosition={mousePosition} isHovered={isHovered}>
              <div className={cn(`absolute  bg-black h-full w-full z-10 opacity-50`, isMobile ? "hidden" : "")} />
              <div
                className={cn(
                  `inline z-20 px-${backgroundPaddingX._} w-full md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} md:w-3/4`
                )}
              >
                Welcome to
                <span
                  className="text-gradient animate-gradient"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                {" EasyCommerce."}
              </span>
                <div className={`text-sm w-full mt-2 md:w-1/2 font-medium text-gradient animate-gradient`}>
                  Your one-stop solution for all your ecommerce needs. Explore our wide range of products and become a seller today.
                </div>
              </div>
            </MaskContainer>
          )}

          <div
            className={cn(
              `transition-all duration-300 h-full items-center overflow-hidden font-bold dark:text-white md:w-3/4 w-full md:py-16 py-4 px-${backgroundPaddingX._}`
            )}
          >
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: transitionDuration, delay: 0.3}}
            >
              Welcome to
            </motion.div>
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: transitionDuration, delay: 0.5}}
              className="text-gradient  translate-x-12 animate-gradient">
              {" EasyCommerce."}
            </motion.div>

            <motion.div
              className={`text-sm font-medium px-[20%] md:px-0 w-full md:w-1/2 mt-2`}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: transitionDuration, delay: 0.8}}
            >
              Your one-stop solution for all your ecommerce needs. Explore our wide range of products and become a seller today.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20}}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: transitionDuration, delay: 1}}
              className="flex relative flex-col sm:flex-row w-full mt-6 sm:mt-4  md:w-fit gap-x-2 z-10">
              <Button size="lg" variant="default" className="gap-x-2 w-full ">
                <ShoppingBag /> Shop Now
              </Button>
                <span className="text-sm my-3 sm:hidden font-medium text-center ">or</span>
              <Button size="lg" variant="outline" className="gap-x-2 w-full ">
                <DollarSign /> Become a Seller
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}