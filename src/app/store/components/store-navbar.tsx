'use client';

import Logo from "@/components/ui/logo";
import {motion} from "framer-motion";
import React from "react";
import StoreNavbarCommand from "./store-navbar-command";
import {StoreNavbarNavigation} from "@/app/store/components/store-navbar-navigation";
import {Button} from "@/components/ui/button";
import {useAuthDialog} from "@/hooks/use-auth-dialog";
import useAuth from "@/hooks/use-auth";
import Image from "next/image";
import {User} from "lucide-react";
const transitionDuration = 1;


const buttonVariants = {
  hidden: {opacity: 0, x: 10},
  visible: {opacity: 1, x: 0},
};

export default function StoreNavbar() {
  const {setOpen} = useAuthDialog();

  const {user} = useAuth();
  return (
    <>
      <nav className="dark:bg-black fixed w-full z-50 flex py-2  text-white bg-zinc-900">
        <div className="flex justify-between md:flex-row items-center w-full px-4 sm:px-16 md:px-8 lg:px-32 xl:px-72">
          <Logo/>

          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: transitionDuration - 0.2}}
            className=" flex md:ml-9 gap-x-1.5">
            <StoreNavbarNavigation/>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: transitionDuration, delay: 0.2}}
            className="hidden md:flex w-full px-9 justify-start">
            <StoreNavbarCommand/>

          </motion.div>
          <div className="flex">
            {!user ? (
              <div className="flex gap-x-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{duration: transitionDuration, delay: 0.4}}
                >

                  <Button className="hidden sm:flex" variant="ghost">
                 <span className="text-gradient animate-gradient">
                  Register
                 </span>
                  </Button>

                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{duration: transitionDuration, delay: 0.6}}
                >

                  <Button onClick={() => setOpen(true)} variant="ghost">
                    Login
                  </Button>
                </motion.div>
              </div>
            ): (
              <div className="flex text-sm gap-x-2 items-center">
                <div className="h-8 w-8 flex items-center justify-center overflow-hidden bg-white rounded-full">
                  {user.imageUrl
                    ? <Image width={100} height={100} src={user.imageUrl} alt={"asd"}/>
                    : <User strokeWidth={1.5} className="dark:text-black w-3/4 h-3/4"/>
                  }
                </div>
                <span className='w-20 truncate'>
                  {user.username}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci alias aliquid amet animi aperiam aspernatur atque autem beatae commodi consequatur corporis cumque cupiditate delectus deleniti dicta distinctio dolor doloremque doloribus ducimus ea eius eligendi error est eum eveniet ex excepturi exercitationem expedita explicabo facere facilis fugiat harum id illum impedit in incidunt ipsa ipsam ipsum iure iusto labore laboriosam laborum laudantium libero magnam magni maiores maxime minima minus molestiae mollitia natus nemo neque nihil nisi nobis non nulla numquam obcaecati odio officiis omnis optio pariatur perferendis perspiciatis placeat praesentium provident quae quam qui quia quibusdam quisquam quo ratione recusandae reiciendis rem repellat repudiandae rerum saepe sapiente sequi similique sit soluta sunt suscipit tempora tenetur totam ullam unde vel veniam veritatis voluptas voluptates voluptatum.
                </span>


              </div>
            )}
          </div>
        </div>
      </nav>

    </>
  );
}