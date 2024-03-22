'use server'

import apiFetcher from "@/actions/api";
import {TFormSchema as TLoginForm} from "@/types/login-form";
import {TFormSchema as TRegisterForm} from "@/types/register-form";

export async function loginUser(data: TLoginForm) {
  return await apiFetcher.post("/auth/login", data)

}

export default async function registerUser(data: TRegisterForm) {
  return await apiFetcher.post("/auth/register", data)

}

export async function getCurrentUser(token: string) {
  return await apiFetcher.get("/auth/me", token)
}
