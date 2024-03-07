import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import React from "react";
import {Label} from "@/components/ui/label";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {toast} from "react-hot-toast";
import {schema, TFormSchema} from "@/types/login-form";
import {login} from "@/actions/login";
import Cookie from "js-cookie";


export default function LoginForm() {
  const {register, handleSubmit, formState: {errors}} = useForm<TFormSchema>({
    resolver: zodResolver(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data: TFormSchema) => {
    console.log('onSubmit called');
    try {
      const resp = await login(data);
      console.log(resp)
      if (resp.status !== 200) {
        console.error(resp.statusText);
        toast.error(resp.statusText);
        return;
      }
      const token = resp?.data?.token;


      // TODO: Save token to cookie
      if (token) {
        Cookie.set("token", token);
        toast.success("Login successful");
      } else {
        console.error("Token not found in response");
        toast.error("Not found");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  function renderError(field: keyof TFormSchema) {
    console.log("Error render")
    if (errors[field]) {
      return (
        <p className="text-red-500 text-xs mt-1">
          {errors[field]?.message}
        </p>
      );
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="mt-1"
        />
        {/*{renderError("email")}*/}
      </div>
      <div>
        <Label htmlFor="password" className="">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="mt-1"
        />
        {/*{renderError("password")}*/}
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </form>
  );
}