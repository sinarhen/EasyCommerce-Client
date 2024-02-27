import {MaskContainer} from "@/components/ui/svg-mask-effect";
import {Button} from "@/components/ui/button";
import {ShoppingBag, Store} from "lucide-react";

const backgroundPaddingX = {
  _: 4,
}
const backgroundPaddingY = {
  "_" : 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 72
}


export default function GridSmallBackgroundDemo() {

  return (
    <div
      className="md:h-max flex flex-col md:flex-row h-[40rem] md:text-start w-full py-32 md:py-32 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex ">
      <div className="text-5xl font-bold sm:4xl md:text-6xl w-full lg:text-7xl xl:text-8xl">
        <MaskContainer
          hoverable={" EasyCommerce."}
          hoverableClassName={`px-${backgroundPaddingX._} w-full md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} md:w-3/4`}
          revealSize={200}
          size={40}
          revealText={
            <div className={`w-3/4 md:w-3/4 w-full md:py-${backgroundPaddingY.md} py-${backgroundPaddingY._} px-${backgroundPaddingX._} `}>
                Explore wide range of products with
                <span className='text-gradient animate-gradient'>
                  {" EasyCommerce."}
                </span>
            </div>
          }

        >

          Explore wide range of products with

        </MaskContainer>

        <div className={`px-${backgroundPaddingX._} relative py-4 md:py-6 lg:py-8 xl:py-10`}>
          <Button
            size="lg"
            variant="default"
            className='absolute flex gap-x-2 z-10'>
            <ShoppingBag/> Shop Now
          </Button>

        </div>
      </div>
    </div>
  );
}