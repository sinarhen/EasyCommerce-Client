'use server'

import api from "@/actions/api";
import {TFormSchema} from "@/types/login-form";
import axios from "axios";


export async function login(data: TFormSchema){
  try {
    const response = await api.post(
      "auth/login",
      data
    );
    return response.data as {
      token: string;
      expiration: string;
    };

  } catch (error) {
    console.error(error);
  }
}