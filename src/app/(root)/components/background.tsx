'use client'

import React, {memo, useCallback, useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {DollarSign, ShoppingBag} from "lucide-react";
import {useCountUp} from "react-countup";
import MousePosition from "@/types/mouse-position";
import MaskContainer from "@/app/(root)/components/mask-container";
import DroppingShirt from "@/app/(root)/components/dropping-shirt";

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

const shirtDropDuration = 3;
const shirtDropDelay = 0.5;


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


export default function GridSmallBackgroundDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const mousePosition = useMousePosition(isMobile, containerRef);
  const [dollarAmount, setDollarAmount] = useState(0);

  const countUpRef = useRef(null);
  const { update } = useCountUp({
    start: 0,
    prefix: "$ ",
    end: dollarAmount,
    duration: 2,
    ref: countUpRef,
  });

  const [prices, setPrices] = useState<{
    shirt1: number;
    shirt2: number;
    shirt3: number;
  }>({
    shirt1: 0,
    shirt2: 0,
    shirt3: 0,
  });

  useEffect(() => {


    const interval = setInterval(() => {
      update(dollarAmount);

      const shirt1 = Math.floor(Math.random() * 100);
      const shirt2 = Math.floor(Math.random() * 100);
      const shirt3 = Math.floor(Math.random() * 100);

      setPrices({
        shirt1,
        shirt2,
        shirt3,
      });
      const shirtSum = shirt1 + shirt2 + shirt3;
      setDollarAmount(prev => prev + shirtSum);
      }, shirtDropDelay + shirtDropDuration * 1000)

    return () => clearInterval(interval);
  }, [dollarAmount, update]);




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
                  `inline z-20 px-${backgroundPaddingX._} w-full md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} `
                )}
              >
                Welcome to
                <div
                  className="text-gradient md:w-fit  animate-gradient"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                {" EasyCommerce."}
              </div>
                <div className={`text-sm w-full mt-2 px-[20%] md:px-0 md:w-[37.5%] font-medium text-gradient animate-gradient`}>
                  Your one-stop solution for all your ecommerce needs. Explore our wide range of products and become a seller today.
                </div>
              </div>
            </MaskContainer>
          )}

          <div
            className={cn(
              `transition-all flex flex-col md:flex-row duration-300 h-full items-center overflow-hidden font-bold dark:text-white w-full md:py-16 py-4 px-${backgroundPaddingX._}`
            )}
          >
            <div className="h-full md:w-3/4">
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
              <div className='relative flex flex-col items-center justify-center mt-24 md:mt-32 w-full'>
                <DroppingShirt shirtDropDuration={shirtDropDuration} price={prices.shirt1} initialX="-100px" delay={0.5} />
                <DroppingShirt shirtDropDuration={shirtDropDuration} price={prices.shirt2} initialX="0px" delay={1} />
                <DroppingShirt shirtDropDuration={shirtDropDuration} price={prices.shirt3} initialX="100px" delay={1.5} />

                <motion.div
                  className={"w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto mt-3"}
                >
                  <ShoppingBag
                    className={"w-full h-full"}
                    strokeWidth={1}
                  />
                </motion.div>
                <div className="flex w-full h-full text-sm justify-center ">


                  <span ref={countUpRef} className="bg-zinc-200  px-2 text-gradient animate-gradient py-1 rounded-xl ">


                  </span>
                </div>

              </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}