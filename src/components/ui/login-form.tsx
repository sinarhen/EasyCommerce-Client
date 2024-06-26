import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import React, {useCallback} from "react";
import {Label} from "@/components/ui/label";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {toast} from "react-hot-toast";
import {schema, TFormSchema} from "@/types/login-form";
import {loginUser} from "@/actions/auth";
import Cookie from "js-cookie";
import {useRouter} from "next/navigation";
import Loading from "@/components/ui/loading";
import {tokenKeyString} from "@/lib/constants";

export default function LoginForm({
                                    onSuccess
                                  }:
                                    {
                                      onSuccess?: () => void;
                                    }) {
  const {
    register,
    setError,
    handleSubmit,
    formState: {errors, isSubmitting, isValid, isDirty, isValidating, isLoading}
  } = useForm<TFormSchema>({
    resolver: zodResolver(schema),
    reValidateMode: "onBlur",
  });

  const router = useRouter();
  const onSubmit = async (data: TFormSchema) => {
    try {
      const resp = await loginUser(data);
      if (!resp){
        toast.error("Something went wrong");
        return;
      }
      if (!resp.success ) {
        console.error(resp.statusText);
        toast.error(resp?.data?.message || resp.statusText);
        if (resp.data.field) {
          setError(resp.data.field, {
            message: resp.data.message
          });

        }
        return;
      }
      const token = resp?.data?.token;

      if (token) {
        Cookie.set(tokenKeyString, token);
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
      toast.error("Something went wrong");
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
        <Button
          disabled={isSubmitting || !isDirty || !isValid || isLoading}
          type="submit">
          {(isSubmitting || isLoading) ? <Loading/> : "Login"}

        </Button>
      </DialogFooter>
    </form>
  );
}