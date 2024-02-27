
import React from "react";

export default function GridSmallBackgroundDemo() {
  return (
    <div className="md:h-max h-[40rem] text-center md:text-start w-full  px-9 py-32 md:py-32 lg:py-40 xl:py-56 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="text-5xl font-bold sm:4xl md:text-6xl w-full md:w-7/12 lg:text-7xl xl:text-9xl">
        Explore wide range of products with <br/><span className="text-gradient animate-gradient">EasyCommerce.</span>
      </div>

    </div>
  );
}
