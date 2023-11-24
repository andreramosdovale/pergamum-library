const controller = new AbortController();
const { signal } = controller;

const defaultHeaderOptions = {
  "Acces-Control-Allow-Origin": "*",
};

function bindUrl(path: string) {
  return `${path}`;
}

async function handleResponse(response: Response | void) {
  const data = await response?.json?.();

  if (!response?.ok) {
    const error = !data;
    return Promise.reject(error);
  }

  return data;
}

async function get(url: string, options?: RequestInit) {
  const requestOptions = {
    headers: defaultHeaderOptions,
    method: "GET",
    signal,
    ...options,
  } as RequestInit;

  if (signal.aborted) {
    return;
  }

  const response = await fetch(bindUrl(url), requestOptions);

  return handleResponse(response);
}

export const fetchWrapper = {
  get,
  abortAll: () => controller.abort(),
};
