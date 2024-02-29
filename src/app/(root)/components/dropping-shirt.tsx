import { motion } from "framer-motion";
import {Shirt} from "lucide-react";

const DroppingShirt = ({initialX, delay, shirtDropDuration, price}: {
  initialX: string;
  delay: number;
  price?: number;
  shirtDropDuration: number;
}) => {
  return (
    <motion.div
      className={"absolute flex items-center justify-center w-fit inset-0 mx-auto h-20 sm:h-24 md:h-28 lg:h-28 xl:h-32 -top-24 sm:-top-[7.5rem] md:-top-36  xl:-top-36"}
      initial={{x: initialX, y: "0%", opacity: 0, }}
      animate={{ y: ["0%", "100%", "0%"], x:[initialX, "0px", initialX], scale: [1, 0.5, 1], opacity: [0, 1, 0.05, 0, 0] }}
      transition={{ repeat: Infinity, duration: shirtDropDuration, delay: delay, ease: "easeInOut"}}
    >
      <span className="text-lg border-2 border-black lg:text-xl xl:text-2xl absolute -rotate-[40deg] -top-2 left-14    bg-white  px-2 py-1 text-white rounded">
        <span className="text-gradient animate-gradient">
          {price}$
        </span>
      </span>

      <Shirt className="h-full w-full" strokeWidth={1} />
    </motion.div>
  );
}

export default DroppingShirt;