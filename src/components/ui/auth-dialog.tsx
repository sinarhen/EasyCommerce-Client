import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import RegisterForm from "@/components/ui/register-form";

export function AuthDialog({
  isOpen,
  setOpen,
  variant = "login",
  setVariant
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  variant?: "login" | "register" ;
  setVariant?: (variant: "login" | "register") => void;
                           }) {

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription onClick={() => setVariant ? variant === "login" ? setVariant("register") : setVariant("login"): {}} className='hover:underline cursor-pointer underline-offset-4'>
            {variant === "login" ? "Not registered yet?" : "Already have an account?"}
          </DialogDescription>
        </DialogHeader>
        {/* Will be replaced with actual forms according to variant */}
        {/*<div className="grid gap-4 py-4">*/}
        {/*  <div className="grid grid-cols-4 items-center gap-4">*/}
        {/*    <Label htmlFor="name" className="text-right">*/}
        {/*      Name*/}
        {/*    </Label>*/}
        {/*    <Input id="name" value="Pedro Duarte" className="col-span-3" />*/}
        {/*  </div>*/}
        {/*  <div className="grid grid-cols-4 items-center gap-4">*/}
        {/*    <Label htmlFor="username" className="text-right">*/}
        {/*      Username*/}
        {/*    </Label>*/}
        {/*    <Input id="username" value="@peduarte" className="col-span-3" />*/}
        {/*  </div>*/}
        {/*</div>*/}
        {variant === "login" ? <></> : <RegisterForm />}
        {/* Will be replaced with actual forms according to variant */}
      </DialogContent>
    </Dialog>
  )
}
