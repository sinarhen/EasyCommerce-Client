
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Bookmark, DollarSign, MessageSquareText, ShoppingBag, ShoppingCart, Star} from "lucide-react";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {iconSizes, partners} from "@/lib/constants";
import Link from "next/link";
import {CardBody, CardContainer, CardItem} from "@/app/store/components/3d-card";
import Image from "next/image";

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

              pt-20
              pb-24
              sm:pt 
              lg:py 
              md:py
              xl:py-
              px-4  
              md:px-12
              lg:px-28 
              xl:px-42
              gap-x-4
              `
            )}
          >
            <div className="h-full flex flex-col justify-between text-center md:text-start sm:mt-12 md:mt-0  md:w-[65%]">
              <div>

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
                </div>
              <div>
                <div className={`
          h-full
          flex
          flex-col 
          md:flex-col-reverse
          font-medium 
          text-sm
          justify-cent
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
                    className="ml-2 animate-fade-in opacity-0 delay-2000  mb-1 text-gray-800  font-semibold mt-2">
                    Our Partners
                  </div>
                </div>
              </div>

            </div>
            <div className="text-base mt-4 hidden md:flex justify-end items-center h-full w-full">
              <CardContainer>
                <CardBody className="h-full w-[350px] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem]  rounded-xl p-6 border  ">
                  <CardItem
                    translateZ={70}
                    className="w-full flex items-center justify-center h-full"
                  >
                      <Image
                        className=""
                        // fill
                        alt="Preview 3d card"
                        width={300}
                        height={300}
                        src="/3dcard-img.png"
                      />
                  </CardItem>

                    <CardItem translateZ={60} className="w-full pt-5 px-5 h-full">
                      <div className="flex opacity-75 justify-between items-center">
                        <div className="flex">
                          <Star color="black" strokeWidth={1} size={32} fill="orange"/>
                          <Star color="black" strokeWidth={1} size={32} fill="orange"/>
                          <Star color="black" strokeWidth={1} size={32} fill="orange"/>
                          <Star color="black" strokeWidth={1} size={32} fill="orange"/>
                          <Star color="black" strokeWidth={1} size={32} fill="orange"/>
                        </div>
                        <div className="flex gap-x-1">
                          <MessageSquareText />
                          <span>35</span>
                        </div>

                      </div>

                      <h1 className="text-2xl font-light">
                        Limited Stone Island Edition
                      </h1>
                    </CardItem>
                  <CardItem translateZ={50} className="mt-1 px-5">
                    <p className="font-light text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias.
                    </p>
                  </CardItem>

                  <CardItem className="gap-x-2 pb-5 mt-4 flex" translateZ={50}>
                    <Button size={"lg"} variant="ghost" className='mt-2 opacity-80 hover:opacity-100 group'>

                        <div className="hover:translate-x-0.5  transition-transform flex gap-x-2 ease-out ">
                          <Bookmark size={iconSizes.md}></Bookmark>
                          To wishlist
                        </div>

                      </Button>
                      <Button size={"lg"} variant="outline" className='mt-2 opacity-80 hover:opacity-100 group'>

                        <div className="hover:translate-x-0.5  transition-transform flex gap-x-2 ease-out ">
                          <ShoppingCart size={iconSizes.md}></ShoppingCart>
                          To cart
                        </div>

                      </Button>

                    </CardItem>

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