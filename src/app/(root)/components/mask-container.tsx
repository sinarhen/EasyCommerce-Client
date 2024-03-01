import React, {memo} from "react";
import {motion} from "framer-motion";
import MousePosition from "@/types/mouse-position";


interface MaskContainerProps {
  isMobile: boolean;
  mousePosition: MousePosition;
  isHovered: boolean;
  children: React.ReactNode;
}


const MaskContainer = memo(({isMobile, mousePosition, isHovered, children}: MaskContainerProps) => {
  const maskSize = isHovered && !isMobile ? 200 : 0;

  const animations = !isMobile ? {
    animate: {
      WebkitMaskPosition: `${mousePosition?.x ? mousePosition.x - maskSize / 2 : 0}px ${
        mousePosition?.y ? mousePosition.y - maskSize / 2 : 0
      }px`,
      WebkitMaskSize: `${maskSize}px`,
    },
    transition: {type: "tween", ease: "backOut", duration: 0.1}
  } : {};

  return (
    <motion.div
      {...animations}
      className={
        "w-full h-full flex absolute bg-black  bg-grid-white/[0.2] dark:bg-white dark:bg-grid-black/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
      }
    >
      {children}
    </motion.div>
  );
});

MaskContainer.displayName = "MaskContainer";


export default MaskContainer;