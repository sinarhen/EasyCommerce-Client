import {apiBase} from "@/lib/constants";

type FetchResult = {
  status: number,
  data: any,
  success: boolean,
  statusText: string,
}

const apiFetcher = {
  get: async (endpoint: string, token?: string): Promise<FetchResult | undefined> => {
    return apiCall('GET', endpoint, undefined, token);
  },
  post: async (endpoint: string, body: object, token?: string): Promise<FetchResult | undefined> => {
    return apiCall('POST', endpoint, body, token);
  },
  put: async (endpoint: string, body: object, token?: string): Promise<FetchResult | undefined> => {
    return apiCall('PUT', endpoint, body, token);
  },
  delete: async (endpoint: string, body: object, token?: string): Promise<FetchResult | undefined> => {
    return apiCall('DELETE', endpoint, body, token);
  },
}

async function apiCall(method: 'GET' | 'POST' | 'PUT' | 'DELETE', endpoint: string, body: any = {}, token?: string): Promise<FetchResult | undefined> {
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