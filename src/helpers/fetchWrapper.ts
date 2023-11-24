function bindUrl(path: string) {
  return `https://pergamum-biblioteca.pucpr.br/api/consulta${path}`;
}

async function handleResponse(response: Response | void) {
  const data = await response?.json?.();

  return data;
}

async function get(url: string, options?: RequestInit) {
  const requestOptions = {
    method: "GET",
    ...options,
  } as RequestInit;

  const response = await fetch(bindUrl(url), requestOptions);

  return handleResponse(response);
}

export const fetchWrapper = {
  get,
};
