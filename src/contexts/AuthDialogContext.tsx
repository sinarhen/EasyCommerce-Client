'use client'

import React from 'react';
import {DialogProps, useDialog} from '@/hooks/use-dialog';
import {AuthDialog} from "@/components/ui/auth-dialog";


export type AuthDialogProps = {
  variant: "login" | "register";
  setVariant: (variant: "login" | "register") => void;
} & DialogProps;

export const AuthDialogContext = React.createContext<AuthDialogProps | null>(null);

export const AuthDialogProvider = ({children}: {
  children: React.ReactNode;

}) => {
  const dialog = useDialog();
  const [variant, setVariant] = React.useState<"login" | "register">("login");

  return (
    <AuthDialogContext.Provider value={{...dialog, variant, setVariant}}>
      <AuthDialog isOpen={dialog.isOpen} setVariant={setVariant} variant={variant} setOpen={dialog.setOpen}/>

      {children}
    </AuthDialogContext.Provider>
  );
};