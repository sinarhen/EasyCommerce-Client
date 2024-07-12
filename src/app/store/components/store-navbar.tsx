
import Logo from "@/components/ui/logo";
import React from "react";
import StoreNavbarCommand from "./store-navbar-command";
import {StoreNavbarNavigation} from "@/app/store/components/store-navbar-navigation";
import {cookies} from "next/headers";
import {tokenKeyString} from "@/lib/constants";
import StoreNavbarAuth from "@/app/store/components/store-navbar-auth";
import {AuthService} from "@/lib/_api/client";

export default async function StoreNavbar() {
  // const {setOpen, setVariant} = useAuthDialog();

  const user = cookies().get(tokenKeyString) ? (await AuthService.getApiAuthMe()
    .catch(err => console.error(err))) ?? undefined : undefined;
  return (
    <>
      <nav className="dark:bg-black fixed w-full z-50 flex py-2  text-white bg-zinc-900">
        <div className="flex justify-between md:flex-row items-center w-full px-4 sm:px-16 md:px-8 lg:px-32 xl:px-72">
          <Logo/>
          <StoreNavbarNavigation/>
          <StoreNavbarCommand/>
          <StoreNavbarAuth user={user} />
        </div>
      </nav>

    </>
  );
}