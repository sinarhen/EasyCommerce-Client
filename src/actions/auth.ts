'use server'

import {schema as loginSchema} from "@/types/login-form";
import {schema as registerSchema} from "@/types/register-form";

import {TFormSchema as TRegisterForm} from "@/types/register-form";
import {AuthService} from "@/lib/_api/client";
import {cookies} from "next/headers";
import {tokenKeyString} from "@/lib/constants";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
//
// export async function test(prevState: any, data: FormData){
//   try {
//     // await createItem(formData.get('todo'))
//     return revalidatePath('/')
//   } catch (e) {
//     return { message: 'Failed to create' }
//   }
// }
export async function loginUser(prevState: {
  error: string
}| undefined, data: FormData) {

  const body = await loginSchema.safeParseAsync({
    email: data.get('email'),
    password: data.get('password'),
  })
  if (!body.success) {
    return {
      error: "Invalid data."
    };
  }
  try {
    const token = await AuthService.postApiAuthLogin(body.data);
    cookies().set(tokenKeyString, token);
    revalidatePath('/store')

  } catch(e) {
    return {
      error: "Email or password is incorrect."
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
    return {
      error: "Invalid data."
    };
  }
  try {
    const token = await AuthService.postApiAuthRegister(body.data);
    cookies().set(tokenKeyString, token);
    revalidatePath('/store')

  } catch(e) {
    console.log(e)
    return {
      error: "Email or password is incorrect."
    }
  }

}

export async function getCurrenUserDto() {
  return AuthService.getApiAuthMe();
}
