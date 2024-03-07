"use client";

import React, { ReactNode } from "react";
import {ThemeProvider} from "next-themes";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "@/contexts/AuthContext";

const Providers = ({ children }: { children: ReactNode }) => (
      <ThemeProvider
        defaultTheme="light"
        attribute="class"

        storageKey="theme"
      >
        <TooltipProvider>
          <Toaster/>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>

);


export default Providers;