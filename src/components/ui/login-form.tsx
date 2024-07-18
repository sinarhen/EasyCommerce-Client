'use client';

import {Input} from "@/components/ui/input";
import React, {useEffect} from "react";
import {Label} from "@/components/ui/label";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {loginUser} from "@/actions/auth";
import {useFormState} from "react-dom";
import {toast} from "react-hot-toast";
import Loading from "@/components/ui/loading";

export default function LoginForm({
                                    onSuccess
                                  }:
                                    {
                                      onSuccess?: () => void;
                                    }) {

  const [state, formAction, isPending] = useFormState(
    loginUser,
    undefined)
  useEffect(() => {
    if (state?.error){
      toast.error(state.error)
    }
  }, [state]);
  return (
    <form action={formAction} className="flex flex-col gap-y-4">
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          className="mt-1"
        />
        {/*{renderError("email")}*/}
      </div>
      <div>
        <Label htmlFor="password" className="">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          className="mt-1"
        />
        {/*{renderError("password")}*/}
      </div>
      <DialogFooter>
        <Button
          disabled={isPending}
          type="submit">

          {(isPending) ? <Loading/> : "Login"}
        </Button>
      </DialogFooter>
    </form>
  );
}