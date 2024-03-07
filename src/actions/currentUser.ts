'use server'

export async function getCurrentUser(token: string) {
  const resp = await fetch(
    "http://localhost:5000/api/auth/me",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }
  )
  return {
    success: resp.ok,
    response: await resp.json(),
    status: resp.status,
    statusText: resp.statusText,
  };
}