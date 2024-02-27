"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
                                children,
                                revealText,
                                size = 10,
                                revealSize = 600,
                                className,
                                hoverable,
                                revealClassName,
                                hoverableClassName
                              }: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  mainText?: string;
  hoverable?: string | React.ReactNode;
  revealSize?: number;
  className?: string;
  revealClassName?: string;
  hoverableClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
    >
      <div>
        <motion.div
          className={"w-full h-full flex justify-center absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"}
          animate={{
            WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
              mousePosition.y - maskSize / 2
            }px`,
            WebkitMaskSize: `${maskSize}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        >
          <div className="absolute inset-0 bg-black h-full w-full z-10 opacity-50" />
          <div
            className={cn("inline  justify-center items-center   font-bold z-20", hoverableClassName) }
          >
            {children}
            <span
              className="text-gradient animate-gradient"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            > EasyCommerce</span>

          </div>

        </motion.div>

        <div

          className={cn("w-full h-full  inline items-center font-bold justify-center  dark:text-white", revealClassName)}>
          {revealText}
        </div>
      </div>

    </motion.div>
  );
};
