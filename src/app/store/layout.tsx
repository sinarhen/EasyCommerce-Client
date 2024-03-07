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
        {children}
      </GridBackground>
    </AuthDialogProvider>
  )
}
