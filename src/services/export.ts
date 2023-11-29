import { apiExportRequest } from "../types/response";
import { fetchWrapper } from "../helpers/fetchWrapper";

async function exportBooks(obj: apiExportRequest): Promise<string> {
  return fetchWrapper
    .post(`https://pergamum-api.vercel.app/get-token`, obj)
    .then((response: string) => {
      return response;
    });
}

async function getToken(): Promise<string> {
  return fetchWrapper
    .get(`https://pergamum-api.vercel.app/get-token`)
    .then((response: string) => {
      return response;
    });
}

export default {
  exportBooks,
  getToken,
};
