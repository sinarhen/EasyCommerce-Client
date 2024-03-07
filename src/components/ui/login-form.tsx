import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import React, {useCallback} from "react";
import {Label} from "@/components/ui/label";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {toast} from "react-hot-toast";
import {schema, TFormSchema} from "@/types/login-form";
import {login} from "@/actions/login";
import Cookie from "js-cookie";
import {useRouter} from "next/navigation";

export default function LoginForm({
                                    onSuccess
                                  }:
                                    {
                                      onSuccess?: () => void;
                                    }) {
  const {register, handleSubmit, formState: {errors}} = useForm<TFormSchema>({
    resolver: zodResolver(schema),
    reValidateMode: "onBlur",
  });

  const router = useRouter();
  const onSubmit = async (data: TFormSchema) => {
    try {
      const resp = await login(data);
      console.log(resp)
      if (!resp.success) {
        console.error(resp.statusText);
        toast.error(resp.statusText);
        return;
      }
      const token = resp?.response?.token;

      if (token) {
        Cookie.set("token", token);
        toast.success("Login successful");
        router.refresh();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        console.error("Token not found in response");
        toast.error("Not found");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message);
    }
  };

  const renderError = useCallback((field: keyof TFormSchema) => {
    if (errors[field]) {
      return (
        <p className="text-red-500 text-xs mt-1">
          {errors[field]?.message}
        </p>
      );
    }
  }, [errors])
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
        {renderError("email")}
      </div>
      <div>
        <Label htmlFor="password" className="">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="mt-1"
        />
        {renderError("password")}
      </div>
      <DialogFooter>
        <Button type="submit">Log in</Button>
      </DialogFooter>
    </form>
  );
}