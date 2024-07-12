'use client'

import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {StoreUserNavigation} from "@/components/ui/store-user-navigation";
import React from "react";
import {useAuthDialog} from "@/hooks/use-auth-dialog";
import {UserDto} from "@/lib/_api/client";

const buttonVariants = {
  hidden: {opacity: 0, x: 10},
  visible: {opacity: 1, x: 0},
};

export default function StoreNavbarAuth({user}: {
  user?: UserDto;
}){

  const {setVariant, setOpen} = useAuthDialog();

  return (
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
        <StoreUserNavigation user={user}/>
      )}
    </div>
  )
}