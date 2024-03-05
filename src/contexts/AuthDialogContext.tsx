import React from 'react';
import { useDialog, DialogProps } from '@/hooks/use-dialog';


export type AuthDialogProps = {
  variant?: "login" | "register";
  setVariant?: (variant: "login" | "register") => void;
} & DialogProps;

export const AuthDialogContext = React.createContext<AuthDialogProps | null>(null);

export const AuthDialogProvider = ({ children }: {
  children: React.ReactNode;

}) => {
  const dialog = useDialog();
  const [variant, setVariant] = React.useState<"login" | "register">("login");
  return (
    <AuthDialogContext.Provider value={{...dialog, variant, setVariant}}>
      {children}
    </AuthDialogContext.Provider>
  );
};