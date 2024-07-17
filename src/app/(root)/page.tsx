import HomePageContent from "./components/home-page-content";
import Navbar from "./components/navbar";
import GridBackground from "@/components/ui/grid-background";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Bookmark, DollarSign, MessageSquareText, ShoppingBag, ShoppingCart, Star} from "lucide-react";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";
import {iconSizes, partners} from "@/lib/constants";
import {CardBody, CardContainer, CardItem} from "@/app/store/components/3d-card";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div
        className="w-full overflow-x-hidden transition-colors duration-700 min-h-screen flex items-center dark:bg-black bg-white  justify-center relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
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
            <div
              className="h-full flex flex-col justify-between text-center md:text-start sm:mt-12 md:mt-0  md:w-[65%]">
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
                    <Button size="lg" variant="ghost" className="gap-x-2 shadow-2xl border border-transparent  hover:text-pink-300 transition-all duration-500 hover:border-pink-300 hover:shadow-pink-800/[0.7] w-full">
                      <ShoppingBag/> Shop Now
                    </Button>
                  </Link>
                  <span className="text-sm my-3 sm:hidden font-medium text-center ">or</span>
                  <Link href={"/seller"} className="w-full flex">
                    <Button size="lg" variant="outline" className="gap-x-2 shadow-2xl hover:text-purple-300 transition-all duration-500 hover:border-purple-300 hover:shadow-purple-800/[0.7] w-full ">
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
                    className="ml-2 animate-left-to-right opacity-0 delay-1000  mb-1 text-gray-800  font-semibold mt-2">
                    Our Partners
                  </div>
                </div>
              </div>

            </div>
            <div className="text-base animate-right-to-left opacity-0 transition-opacity delay-1000 mt-4 hidden md:flex justify-end lg:items-center items-end h-full w-full">
              <CardContainer>
                <CardBody
                  className="w-full h-full bg-gray-50 relative group/card  dark:bg-black transition-all dark:border-white/[0.2] border-black/[0.1] hover:shadow-2xl hover:shadow-purple-800/[0.4] duration-500     rounded-xl p-6 border  ">
                  <CardItem
                    translateZ={70}
                    className="flex items-center h-full justify-center w-full"
                  >
                    <Image
                      className="lg:w-3/4 w-1/2 h-1/2 lg:h-3/4"
                      // fill
                      alt="Preview 3d card"
                      width={200}
                      height={200}
                      src="/3dcard-img.png"
                    />
                  </CardItem>
                  <CardItem translateZ={90} translateY={-2} className="w-full pt-5 px-5">
                    <div className="flex opacity-75 justify-between items-center">
                      <div className="flex">
                        <Star color="black" strokeWidth={1} size={26} fill="orange"/>
                        <Star color="black" strokeWidth={1} size={26} fill="orange"/>
                        <Star color="black" strokeWidth={1} size={26} fill="orange"/>
                        <Star color="black" strokeWidth={1} size={26} fill="orange"/>
                        <Star color="black" strokeWidth={1} size={26} fill="orange"/>
                      </div>

                      <div className="flex gap-x-1">
                        <MessageSquareText size={22}/>
                        <span>35</span>
                      </div>

                    </div>

                  </CardItem>
                  <CardItem translateZ={60} className="w-full mt-2 px-5">


                    <h1 className="text-xl font-light">
                      Limited Stone Island Edition
                    </h1>
                  </CardItem>
                  <CardItem translateZ={50} className="mt-1 px-5">
                    <p className="font-light text-base">
                      Stone Island t-shirt from limited 2023 collection ...
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
      </div>

    </>
  );
}
