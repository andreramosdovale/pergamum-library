import { Flex } from "@radix-ui/themes";
import { FilterBox } from "./components/FilterBox";
import queryService from "./services/query";
import { useEffect, useState } from "react";
import { bookResponse } from "./types/response";
import { Card } from "./components/Card";
import { Pagination } from "./helpers";
import { useFilterStore } from "./store/FilterStore";
import { LoadingSpinner } from "./components/LoadingSpinner";

import "./styles/App.scss";

function App() {
  const [displayData, setDisplayData] = useState<bookResponse[] | []>([]);
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const filterStore = useFilterStore();

  const fetchApi = async (filter: string) => {
    setIsLoading(true);

    await queryService
      .books(filter)
      .then(({ data, count }) => {
        setCount(count);
        const listLimit = count > 10 ? 10 : count;
        const paginatedData = new Pagination(data, listLimit);

        setDisplayData(paginatedData.display(1));
        setIsLoading(false);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchApi(filterStore.filter.term);
  }, [filterStore.filter.term]);

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
            {count > 0 ? <></> : null}
          </>
        )}
      </Flex>
    </div>
  );
}

export default App;
