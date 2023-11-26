import { bookResponse } from "../types/response";
import { fetchWrapper } from "../helpers/fetchWrapper";

async function books(option: string, filter: string) {
  return fetchWrapper
    .get(
      `?coluna_um=${option}&search_id=1&search_tab=pesquisa_geral&termo_pesquisa=${filter}`
    )
    .then((response: Array<bookResponse>) => {
      return { data: response, count: response.length };
    })
    .catch(() => {
      return { data: [], count: 0 };
    });
}

export default {
  books,
};
