'use server'

import api from "@/actions/api";
import {TFormSchema} from "@/types/login-form";
import axios from "axios";


export async function login(data: TFormSchema){
    const response = await api.post(
      "auth/login",
      data
    );
    return response;

}