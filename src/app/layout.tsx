import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/ThemeProvider";
import Navbar from "@/app/(root)/components/navbar";
import {TooltipProvider} from "@/components/ui/tooltip";
import GridBackground from "@/lib/grid-background";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey="theme"
    >
      <TooltipProvider>
          {children}
        {/* <Footer /> */}
      </TooltipProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
