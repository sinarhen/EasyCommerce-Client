
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {DollarSign, ShoppingBag} from "lucide-react";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {partners} from "@/lib/constants";
import Link from "next/link";
import {CardBody, CardContainer} from "@/app/store/components/3d-card";
const backgroundPaddingY = {
  _: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 72,
};

// const headerVariants = {
//   hidden: {opacity: 0, x: -40},
//   visible: {opacity: 1, x: 0}
// };
//
//
// const transitionDuration = 0.7;


export default function HomePageContent() {

  return (
    <>
      <div
        className={
          " w-full  h-screen"
        }
      >

          <div
            className={cn(
              `transition-all flex flex-col md:flex-row duration-300 h-full overflow-hidden font-bold dark:text-white w-full 
              sm:py-${backgroundPaddingY.sm} 
              lg:py-${backgroundPaddingY.lg} 
              md:py-${backgroundPaddingY.md} 
              py-${backgroundPaddingY._} 
              xl:py-${backgroundPaddingY.xl} px-4  
              md:px-12
              lg:px-28 
              xl:px-42
              gap-x-4
              `
            )}
          >
            <div className="h-full text-center md:text-start sm:mt-12 md:mt-0  md:w-[65%]">
              <div className="text-6xl font-bold sm:text-6xl md:text-7xl xl:text-[5.25rem]">

                <div className="animate-left-to-right opacity-0">
                  Welcome to
                </div>
                <div
                  className="animate-left-to-right delay-700 opacity-0  ">

                  <span className="animate-gradient text-gradient">{" EasyCommerce."}</span>
                </div>
              </div>

              <div
                className={`animate-fade-in delay-1000 opacity-0 md:text-base text-sm font-light px-[20%] md:px-0 w-full md:w-1/2 mt-5`}
                // initial={{opacity: 0}}
                // animate={{opacity: 1}}
                // transition={{duration: transitionDuration, delay: 0.8}}
              >
                Your one-stop solution for all your ecommerce needs. Explore our wide range of products and become a
                seller today.
              </div>

              <div
                className="flex relative animate-bottom-to-top delay-1000 opacity-0 flex-col sm:flex-row w-full mt-8 sm:mt-5  md:w-fit gap-x-2 z-10">
                <Link className="w-full flex" href={"/store"}>
                  <Button size="lg" variant="default" className="gap-x-2 w-full">
                    <ShoppingBag/> Shop Now
                  </Button>
                </Link>
                <span className="text-sm my-3 sm:hidden font-medium text-center ">or</span>
                <Link href={"/seller"} className="w-full flex">
                  <Button size="lg" variant="outline" className="gap-x-2 w-full ">
                    <DollarSign/> Become a Seller
                  </Button>
                </Link>
              </div>
              <div>
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
          `}>
                  <div className="flex">
                    <AnimatedTooltip items={partners}/>
                  </div>
                  <div
                    className="ml-2 sm:text-xs mb-1 text-gray-800 lg:text-lg font-semibold mt-2">
                    Our Partners
                  </div>
                </div>
              </div>

            </div>
            <div className="text-base w-[35%]">
              <CardContainer className="bg-white flex-shrink border rounded-lg ">
                <CardBody>
                  dasdasd
                </CardBody>
              </CardContainer>

            </div>
            {/*<motion.div*/}
            {/*  initial={{opacity: 0, y: 20}}*/}
            {/*  animate={{opacity: 1, y: 0}}*/}
            {/*  transition={{duration: transitionDuration, delay: 1}}*/}
            {/*  className=' mt-28 sm:mt-28 md:mt-32  w-full'>*/}
            {/*  <ShoppingEarnings className="flex w-full justify-center md:justify-end"/>*/}
            {/*</motion.div>*/}
          </div>


      </div>
    </>
  )
};