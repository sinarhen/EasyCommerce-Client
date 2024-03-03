import React from "react";
import GridBackground from "@/lib/grid-background";
import StoreNavbar from "@/components/ui/store-navbar";

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
    <>
      <StoreNavbar />
      <GridBackground>
        {children}
      </GridBackground>
    </>
  )
}
