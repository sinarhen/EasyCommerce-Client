'use server'

import {schema as loginSchema} from "@/types/login-form";
import {schema as registerSchema} from "@/types/register-form";
import {AuthService} from "@/lib/_api/client";
import {cookies} from "next/headers";
import {tokenKeyString} from "@/lib/constants";
import {revalidatePath} from "next/cache";

export async function loginUser(prevState: {
  error: string
}| undefined, data: FormData) {

  const body = await loginSchema.safeParseAsync({
    email: data.get('email'),
    password: data.get('password'),
  })
  if (!body.success) {
    return {
      error: body.error.errors.map(e => " - " + e.message).join('\n')
    };
  }
  try {
    const token = await AuthService.postApiAuthLogin(body.data);
    cookies().set(tokenKeyString, token);
    revalidatePath('/store')

  } catch(e: any) {
    return {
      error: e?.body
    }
  }

}

export async function registerUser(initialState: {
  error: string
}| undefined, data: FormData) {

  const body = await registerSchema.safeParseAsync({
    email: data.get('email'),
    password: data.get('password'),
    username: data.get('username'),
    confirmPassword: data.get('confirmPassword')
  })
  if (!body.success) {
    return {error: body.error.errors.map(e => " - " + e.message).join('\n')};
  }
  try {
    const token = await AuthService.postApiAuthRegister(body.data);
    cookies().set(tokenKeyString, token);
    revalidatePath('/store')

  } catch(e: any) {
    return {
      error: e?.body
    }
  }

}

export async function getCurrenUserDto() {
  return AuthService.getApiAuthMe();
}
