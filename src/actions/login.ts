'use server'

import {TFormSchema} from "@/types/login-form";
import apiFetcher from "@/actions/api";

export async function login(data: TFormSchema) {
  return await apiFetcher("POST", "/auth/login", data)

}