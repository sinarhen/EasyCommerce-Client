'use server'

import {TFormSchema} from "@/types/login-form";

export async function login(data: TFormSchema) {
  const resp = await fetch(
    "http://localhost:5000/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return {

    "response": await resp.json(),
    "status": resp.status,
    "statusText": resp.statusText,
    success: resp.status === 200,

  };

}