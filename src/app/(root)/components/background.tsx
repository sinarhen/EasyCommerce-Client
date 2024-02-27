import {MaskContainer} from "@/components/ui/svg-mask-effect";

export default function GridSmallBackgroundDemo() {

  return (
    <div
      className="md:h-max h-[40rem] md:text-start w-full py-32 md:py-32 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex ">
      {/* Radial gradient for the container to give a faded look */}

      <div className="text-5xl font-bold sm:4xl md:text-6xl w-full lg:text-7xl xl:text-8xl">
        <MaskContainer
          hoverable={" EasyCommerce"}
          hoverableClassName={"px-9 md:py-8 py-4 w-3/4"}
          revealSize={900}
          size={40}
          revealText=
            {
              <div className='w-3/4 md:py-8 py-4 px-9'>
                Explore wide range of products with
                <span className='text-gradient animate-gradient'>
                  {" EasyCommerce."}
                </span>
              </div>
            }

        >

          Explore wide range of products with

        </MaskContainer>
      </div>
    </div>
  );
}