'use client';

import DroppingShirt from "@/app/(root)/components/dropping-shirt";
import {motion} from "framer-motion";
import {ShoppingBag} from "lucide-react";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useCountUp} from "react-countup";
import {cn} from "@/lib/utils";

const iterablePrices = [
  [33, 21, 89],
  [45, 67, 23],
  [100, 110, 120],
  [60, 72, 80],
  [27, 20, 89],
  [15, 67, 90],
]

const iterableColors = [
  ["#B45396", "#fff", "#000"],
  ["red", "purple", "blue"],
  ["orange", "#fff", "#000"],
  ["black", "white", "green"],
  ["#B45396", "#fff", "#000"],
  ["red", "purple", "blue"],
]


const shirtDropDuration = 2.5;
const shirtDropDelay = 1;
const ShoppingEarnings = ({
                            className
                          }: {
  className?: string
}) => {
  const [dollarAmount, setDollarAmount] = useState(0);

  const countUpRef = useRef(null);
  const {update} = useCountUp({
    start: 0,
    prefix: "$ ",
    end: dollarAmount,
    duration: 2,
    ref: countUpRef,
  });

  const [prices, setPrices] = useState(iterablePrices[0]);
  const [colors, setColors] = useState(iterableColors[0]);

  const [iterIndex, setIterIndex] = useState(0);
  const getColorsAndPrices = useCallback((index: number) => {
    const prices = iterablePrices[index % iterablePrices.length];
    const colors = iterableColors[index % iterableColors.length];
    return {randomPrices: prices, randomColors: colors};
  }, []);

  const {randomPrices, randomColors} = useMemo(() => getColorsAndPrices(iterIndex), [getColorsAndPrices, iterIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(randomPrices);
      setColors(randomColors);

      const shirtSum = prices.reduce((a, b) => a + b, 0);
      setDollarAmount(prev => prev + shirtSum);
      update(dollarAmount + shirtSum);
      setIterIndex(prev => prev + 1);
    }, (shirtDropDuration + shirtDropDelay) * 1000);

    return () => clearInterval(interval);
  }, [dollarAmount, update, iterIndex, prices, colors, randomPrices, randomColors]);
  return (
    <div className={cn("relative", className)}>
      <div className='relative'>
        <DroppingShirt color={colors[0]} shirtDropDuration={shirtDropDuration} price={prices[0]} initialX="-100px"
                       delay={shirtDropDelay}/>
        <DroppingShirt color={colors[1]} shirtDropDuration={shirtDropDuration} price={prices[1]} initialX="0px"
                       delay={shirtDropDelay + 0.7}/>
        <DroppingShirt color={colors[2]} shirtDropDuration={shirtDropDuration} price={prices[2]} initialX="100px"
                       delay={shirtDropDelay + 1.4}/>

        <motion.div
          className={"w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto mt-3"}
        >
          <ShoppingBag
            fill={"#7C3AED"}
            className={"w-full h-full text-white dark:text-black"}
            strokeWidth={1}
          />
        </motion.div>
        <div className="flex w-full h-full text-sm justify-center ">


                  <span ref={countUpRef} className="bg-zinc-200  px-2 text-gradient animate-gradient py-1 rounded-xl ">


                  </span>
        </div>

      </div>

    </div>
  )
}

export default ShoppingEarnings;