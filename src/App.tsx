import "./styles/App.scss";
import { Flex } from "@radix-ui/themes";
import { FilterBox } from "./components/FilterBox";
import queryService from "./services/query";
import { useEffect, useState } from "react";
import { bookResponse } from "./types/response";
import { Card } from "./components/Card";

function App() {
  const [apiData, setApiData] = useState<bookResponse[] | []>([]);
  const [count, setCount] = useState<number>(0);

  const fetchApi = async () => {
    const { data, count } = await queryService.books("harry+potter");

    setApiData(data);
    setCount(count);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="app">
      <div className="app-header" />
      <FilterBox />
      <Flex direction={"column"} gap={"3"}>
        {count > 0 ? (
          apiData?.map((book, index) => {
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
        ) : (
          <p>n tem dado</p>
        )}
      </Flex>
    </div>
  );
}

export default App;
