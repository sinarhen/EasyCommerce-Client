import {Input} from "@/components/ui/input";
import React, {useCallback} from "react";
import {Label} from "@/components/ui/label";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {loginUser} from "@/actions/auth";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

export default function LoginForm({
                                    onSuccess
                                  }:
                                    {
                                      onSuccess?: () => void;
                                    }) {
  // const {
  //   register,
  //   setError,
  //   handleSubmit,
  //   formState: {errors, isSubmitting, isValid, isDirty, isValidating, isLoading}
  // } = useForm<TFormSchema>({
  //   resolver: zodResolver(schema),
  //   reValidateMode: "onBlur",
  // });

  // const renderError = useCallback((field: keyof TFormSchema) => {
  //   if (errors[field]) {
  //     return (
  //       <p className="text-red-500 text-xs mt-1">
  //         {errors[field]?.message}
  //       </p>
  //     );
  //   }
  // }, [errors])
  const pathname = usePathname();
  const loginWithPath = loginUser.bind(null, pathname)
  return (
    <form action={loginWithPath} className="flex flex-col gap-y-4">
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
          // disabled={isSubmitting || !isDirty || !isValid || isLoading}
          type="submit">
          {/*{(isSubmitting || isLoading) ? <Loading/> : "Login"}*/}
          Login
        </Button>
      </DialogFooter>
    </form>
  );
}