"use client";

import React, {ReactNode, useState} from "react";
import {ThemeProvider} from "next-themes";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "react-hot-toast";
import {AuthProvider} from "@/contexts/AuthContext";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Providers = ({children}: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
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
    </QueryClientProvider>

  )
};


export default Providers;