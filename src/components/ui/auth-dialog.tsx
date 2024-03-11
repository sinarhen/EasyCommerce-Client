import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog"
import RegisterForm from "@/components/ui/register-form";
import React from "react";
import LoginForm from "@/components/ui/login-form";

export function AuthDialog({
                             isOpen,
                             setOpen,
                             variant = "login",
                             setVariant
                           }: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  variant?: "login" | "register";
  setVariant?: (variant: "login" | "register") => void;
}) {

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <span className="text-gradient animate-gradient">
              {variant === "login" ? "Login" : "Register"}
            </span>
          </DialogTitle>
          <DialogDescription
            onClick={() => setVariant ? variant === "login" ? setVariant("register") : setVariant("login") : {}}
            className='hover:underline cursor-pointer underline-offset-4'>
            {variant === "login" ? "Not registered yet?" : "Already have an account?"}
          </DialogDescription>
        </DialogHeader>
        {variant === "login" ? <LoginForm onSuccess={() => {
          setOpen(false)
        }}/> : <RegisterForm onSuccess={() => {
          setOpen(false)
        }}/>}
      </DialogContent>
    </Dialog>
  )
}
