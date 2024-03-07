'use server'

import api from "@/actions/api";
import {TFormSchema} from "@/types/register-form";


export default async function registerUser(data: TFormSchema){
  const response = await api.post("/auth/register", {
    email: data.email,
    password: data.password,
  });
  return response.data;

}