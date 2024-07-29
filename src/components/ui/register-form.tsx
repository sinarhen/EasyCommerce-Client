import {Input} from "@/components/ui/input";
import React, {useEffect} from "react";
import {Label} from "@/components/ui/label";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useFormState} from "react-dom";
import {registerUser} from "@/actions/auth";
import {toast} from "react-hot-toast";
import Loading from "@/components/ui/loading";


export default function RegisterForm({
                                       onSuccess
                                     }: {
  onSuccess: () => void;
}) {

  const [state, formAction, isPending] = useFormState(
    registerUser,
    undefined)
  useEffect(() => {
    if (state?.error){
      toast.error(state.error)
    } else {
      onSuccess?.()
    }
  }, [onSuccess, state]);

  return (
    <form action={formAction} className="flex flex-col gap-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          name={"email"}
          type="email"
          placeholder="Email"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          name={"username"}
          type="text"
          placeholder="Username"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="password" className="">Password</Label>
        <Input
          type="password"
          name={"password"}
          placeholder="Password"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="">Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          className="mt-1"
          name={"confirmPassword"}
        />
      </div>
      <DialogFooter
      >
        <Button
          disabled={isPending}

          type="submit">
          {(isPending) ? <Loading/> : "Register"}

        </Button>
      </DialogFooter>
    </form>
  );
}