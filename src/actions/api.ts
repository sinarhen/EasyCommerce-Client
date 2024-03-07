import {apiBase} from "@/lib/constants";

const apiFetcher = async (method: string, endpoint: string, body: object, token?: string) => {
  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
  }
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(
    `${apiBase}/${endpoint}`,
    {
      method: method,
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