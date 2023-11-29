export interface bookResponse {
  cod_empresa: string;
  cod_acervo: string;
  descricao: string;
  obra: string;
  desc_tipo_obra: string;
  referencia: string;
  referencia_sem_tag: string;
  gera_exemplar: string;
  classificacao: string;
  tot_exemplares: string;
  total_titulos: string;
  link_capa: string;
  gera_773: string;
  possui_doc_online: string;
  possui_out_titulos: string;
  tem_773_relacionado: string;
  arquivo_indexar: string;
  qtde_comentarios: string;
  cod_nivel_permissao: string;
  permite_arquivo_vinculo: string;
  permite_arquivo_exemplar: string;
  icone: string;
  cod_tipo_obra: string;
  cod_sit_acervo: string;
  isbn_iss?: string;
  resumo: string;
  autor: string;
  seq_paragrafo_capa: string;
  ano_publicacao: string;
  acesso_remoto: string;
  possui_acessibilidade: string;
  idioma: string;
  desc_fisica: string;
  disp_para_reserva: string;
  idioma_desc: string;
  autor_principal: string;
  edicao: string;
  eh_legislacao: string;
  cor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dados_adicionais: any;
}

export interface apiResponse {
  data: bookResponse[];
  count: number;
}

export interface apiExportRequest {
  email: string;
  name: string;
  data: Array<string>;
  token: string;
}
