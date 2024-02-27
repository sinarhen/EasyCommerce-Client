import {MaskContainer} from "@/components/ui/svg-mask-effect";

export default function GridSmallBackgroundDemo() {

  return (
    <div className="md:h-max h-[40rem] text-center md:text-start w-full py-32 md:py-32 lg:py-40 xl:py-56 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex ">
      {/* Radial gradient for the container to give a faded look */}

      <div className="text-5xl font-bold sm:4xl md:text-6xl w-full lg:text-7xl xl:text-9xl">
        <MaskContainer
          hoverable={" EasyCommerce"}
          hoverableClassName={"px-9"}
          revealSize={300}
          size={40}
          revealText=
            {
              <div className=' px-9'>
                Explore wide range of products with
                <span className='text-gradient animate-gradient'>
                  {" EasyCommerce"}
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