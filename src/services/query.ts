import { bookResponse, apiResponse } from "../types/response";
import { fetchWrapper } from "../helpers/fetchWrapper";

async function books(filter: string): Promise<apiResponse> {
  return fetchWrapper
    .get(
      `https://pergamum-biblioteca.pucpr.br/api/consulta?coluna_um=LIVRE&search_id=1&search_tab=pesquisa_geral&termo_pesquisa=${filter}`
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
