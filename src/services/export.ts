import { apiExportRequest } from "../types/response";
import { fetchWrapper } from "../helpers/fetchWrapper";

async function exportBooks(obj: apiExportRequest): Promise<string> {
  return fetchWrapper
    .post(`https://pergamum-api.vercel.app/export`, obj)
    .then((response: string) => {
      return response;
    });
}

export default {
  exportBooks,
};
