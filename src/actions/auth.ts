'use server'

import {TFormSchema as TLoginForm} from "@/types/login-form";
import {TFormSchema as TRegisterForm} from "@/types/register-form";
import {AuthService} from "@/lib/_api/client";

export async function loginUser(data: TLoginForm) {
  return AuthService.postApiAuthLogin(data)

}

export default async function registerUser(data: TRegisterForm) {
  return AuthService.postApiAuthRegister(data);

}

export async function getCurrenUserDto() {
  return AuthService.getApiAuthMe();
}
