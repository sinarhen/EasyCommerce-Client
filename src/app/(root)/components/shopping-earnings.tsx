'use client';

import DroppingShirt from "@/app/(root)/components/dropping-shirt";
import {motion} from "framer-motion";
import {ShoppingBag} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";
import {useCountUp} from "react-countup";


const shirtDropDuration = 2.5;
const shirtDropDelay = 0.5;
const ShoppingEarnings = () => {
  const [dollarAmount, setDollarAmount] = useState(0);

  const countUpRef = useRef(null);
  const {update} = useCountUp({
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
      update(dollarAmount + shirtSum);
    }, (shirtDropDuration) * 1000)

    return () => clearInterval(interval);
  }, [dollarAmount, update]);

  return (
    <>
      <DroppingShirt shirtDropDuration={shirtDropDuration} price={prices.shirt1} initialX="-100px"
                     delay={shirtDropDelay}/>
      <DroppingShirt shirtDropDuration={shirtDropDuration} price={prices.shirt2} initialX="0px"
                     delay={shirtDropDelay + 0.7}/>
      <DroppingShirt shirtDropDuration={shirtDropDuration} price={prices.shirt3} initialX="100px"
                     delay={shirtDropDelay + 1.4}/>

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

    </>
  )
}

export default ShoppingEarnings;