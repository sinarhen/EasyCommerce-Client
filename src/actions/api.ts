import {apiBase} from "@/lib/constants";
import {Dispatcher} from "undici-types";
import HttpMethod = Dispatcher.HttpMethod;

const apiFetcher = async (method: HttpMethod, endpoint: string, body: object, token?: string) => {
  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  }
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(
    `${apiBase}/api/auth/register`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }
  );

  return {
    status: response.status,
    data: await response.json(),
    success: response.ok,
    statusText: response.statusText,
  }
}};

export default apiFetcher;