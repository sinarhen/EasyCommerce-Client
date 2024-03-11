import {apiBase} from "@/lib/constants";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type FetchResult = {
  status: number,
  data: any,
  success: boolean,
  statusText: string,

}

async function apiFetcher(method: 'GET', endpoint: string, token?: string): Promise<FetchResult>;
async function apiFetcher(method: Exclude<Method, 'GET'>, endpoint: string, body: object, token?: string): Promise<FetchResult>;
async function apiFetcher(method: Method, endpoint: string, body: any = {}, token?: string): Promise<FetchResult | undefined> {
  try {
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    }
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(
      `${apiBase}${endpoint}`,
      {
        method: method,
        headers: headers,
        body: method === 'GET' ? undefined : JSON.stringify(body),
      }
    );
    return {
      status: response.status,
      data: response ? await response.json() : null,
      success: response.ok,
      statusText: response.statusText,
    }
  } catch (error: any) {
    console.error(error);
  }
}

export default apiFetcher;