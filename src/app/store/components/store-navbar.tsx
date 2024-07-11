'use client'; // TODO: Change to server

import Logo from "@/components/ui/logo";
import {motion} from "framer-motion";
import React from "react";
import StoreNavbarCommand from "./store-navbar-command";
import {StoreNavbarNavigation} from "@/app/store/components/store-navbar-navigation";
import {Button} from "@/components/ui/button";
import {useAuthDialog} from "@/hooks/use-auth-dialog";
import {StoreUserNavigation} from "@/components/ui/store-user-navigation";
import {TUser} from "@/types/user";



const buttonVariants = {
  hidden: {opacity: 0, x: 10},
  visible: {opacity: 1, x: 0},
};

export default function StoreNavbar({user}: {
  user?: TUser | null
}) {
  const {setOpen, setVariant} = useAuthDialog();

  // const {user} = useAuth(); Separated auth logic on server
  return (
    <>
      <nav className="dark:bg-black fixed w-full z-50 flex py-2  text-white bg-zinc-900">
        <div className="flex justify-between md:flex-row items-center w-full px-4 sm:px-16 md:px-8 lg:px-32 xl:px-72">
          <Logo/>


          <StoreNavbarNavigation/>

          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.2}}
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
                  transition={{duration: 1, delay: 0.4}}
                >

                  <Button onClick={() => {
                    setVariant("register")
                    setOpen(true)

                  }}
                          className="hidden sm:flex" variant="ghost">
                 <span className="text-gradient animate-gradient">
                  Register
                 </span>
                  </Button>

                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  transition={{duration: 1, delay: 0.6}}
                >

                  <Button onClick={() => {
                    setOpen(true)
                    setVariant("login")
                  }} variant="ghost">
                    Login
                  </Button>
                </motion.div>
              </div>
            ) : (
              <StoreUserNavigation/>
            )}
          </div>
        </div>
      </nav>

    </>
  );
}