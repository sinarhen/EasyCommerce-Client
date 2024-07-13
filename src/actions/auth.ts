'use server'

import {schema} from "@/types/login-form";
import {TFormSchema as TRegisterForm} from "@/types/register-form";
import {AuthService} from "@/lib/_api/client";
import {cookies} from "next/headers";
import {tokenKeyString} from "@/lib/constants";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function loginUser(successUrl: string, data: FormData) {

  const body = await schema.safeParseAsync({
    email: data.get('email'),
    password: data.get('password'),
  })

  if (!body.success) {
    console.log(body.error);
    console.log(body);
    throw new Error('Invalid credentials');
  }

  const token = await AuthService.postApiAuthLogin(body.data);
  if (!token) {
    throw new Error('Invalid credentials');
  }
  cookies().set(tokenKeyString, token);

  revalidatePath(successUrl);
  redirect(successUrl);
}

export default async function registerUser(data: TRegisterForm) {
  return AuthService.postApiAuthRegister(data);

}

export async function getCurrenUserDto() {
  return AuthService.getApiAuthMe();
}
