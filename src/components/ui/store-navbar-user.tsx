import Image from "next/image";
import {User} from "lucide-react";
import React from "react";
import useAuth from "@/hooks/use-auth";

export default function StoreNavbarUser(){
  const {user} = useAuth();
  if (!user){
    return null
  }
  return (
    <div className="flex text-sm gap-x-2 items-center">
      <div className="h-8 w-8 flex items-center justify-center overflow-hidden bg-white rounded-full">
        {user.imageUrl
          ? <Image width={100} height={100} src={user.imageUrl} alt={"asd"}/>
          : <User strokeWidth={1.5} className="text-black w-3/4 h-3/4"/>
        }
      </div>
      <span className='w-20 truncate'>
                  {user.username}
      </span>


    </div>
  )
}