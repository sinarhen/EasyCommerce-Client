import React from "react";
import GridBackground from "@/components/ui/grid-background";
import StoreNavbar from "@/app/store/components/store-navbar";
import {AuthDialogProvider} from "@/contexts/AuthDialogContext";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <AuthDialogProvider>
      <StoreNavbar/>
      <GridBackground>
        <div className="h-full
          px-4
          overflow-x-hidden
          md:px-8
          lg:px-16
          xl:px-44 flex w-full py-24 md:py-30 ">
          {children}
        </div>
      </GridBackground>
    </AuthDialogProvider>
  )
}
