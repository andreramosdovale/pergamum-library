import { Flex } from "@radix-ui/themes";
import { FilterBox } from "./components/FilterBox";
import queryService from "./services/query";
import { useEffect, useState } from "react";
import { bookResponse } from "./types/response";
import { Card } from "./components/Card";
import { Pagination } from "./helpers";
import { useFilterStore } from "./store/FilterStore";
import { useExportStore } from "./store/ExportStore";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Pagination as PaginationComponent } from "antd";

import "./styles/App.scss";

function App() {
  const [displayData, setDisplayData] = useState<bookResponse[] | []>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [, setNumOfPages] = useState(1);
  const [paginationPageNow, setPaginationPageNow] = useState(1);

  const filterStore = useFilterStore();
  const exportStore = useExportStore();

  const fetchApi = async (filter: string) => {
    setIsLoading(true);

    await queryService
      .books(filter)
      .then(({ data, count }) => {
        setCount(count);
        const listLimit = count > 10 ? 10 : count;
        const paginatedData = new Pagination(data, listLimit);

        exportStore.addToApiData(data);
        const { numOfPages } = paginatedData.paginationController();

        setNumOfPages(numOfPages);
        setDisplayData(paginatedData.display(paginationPageNow));
        setIsLoading(false);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchApi(filterStore.filter.term);
  }, [filterStore.filter.term]);

  const onChangePage = (e: number) => {
    setPaginationPageNow(e);

    const listLimit = count > 10 ? 10 : count;
    const paginatedData = new Pagination(exportStore.apiData, listLimit);

    setDisplayData(paginatedData.display(paginationPageNow));
  };

  return (
    <div className="app">
      <div className="app-header" />
      <FilterBox />
      <Flex direction={"column"} gap={"3"}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {count > 0
              ? displayData?.map((book, index) => {
                  return (
                    <Card
                      key={index}
                      id={book.cod_acervo}
                      reference={book.referencia_sem_tag}
                      image={book.link_capa}
                      description={book.descricao}
                      type={book.desc_tipo_obra}
                    />
                  );
                })
              : null}
            {count > 0 ? (
              <Flex justify={"center"} mb={"3"}>
                <PaginationComponent
                  current={paginationPageNow}
                  onChange={(e) => onChangePage(e)}
                  total={count}
                />
              </Flex>
            ) : null}
          </>
        )}
      </Flex>
    </div>
  );
}

export default App;
