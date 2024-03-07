'use server'

import api from "@/actions/api";
import {TFormSchema} from "@/types/register-form";
import apiFetcher from "@/actions/api";


export default async function registerUser(data: TFormSchema) {
  return await apiFetcher("POST", "/auth/register", data)

}