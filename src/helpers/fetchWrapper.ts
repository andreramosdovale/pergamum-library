import { apiExportRequest } from "../types/response";

async function handleResponse(response: Response | void) {
  const data = await response?.json?.();

  return data;
}

async function get(url: string, options?: RequestInit) {
  const requestOptions = {
    method: "GET",
    ...options,
  } as RequestInit;

  const response = await fetch(url, requestOptions);

  return handleResponse(response);
}

async function post(url: string, body: apiExportRequest) {
  const requestOptions = {
    method: "POST",
    headers: {
      "X-CSRF-TOKEN": `${body.token}`,
      "Acces-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  } as RequestInit;

  const response = await fetch(url, requestOptions);

  return handleResponse(response);
}

export const fetchWrapper = {
  get,
  post,
};
