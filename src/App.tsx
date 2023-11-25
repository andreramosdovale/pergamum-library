import "./styles/App.scss";
import { ImageCard } from "./components/ImageCard/ImageCard";
import { Flex } from "@radix-ui/themes";

function App() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="app">
      <div className="app-header" />
      <div className="app-filterBox" />
      <Flex direction={"column"} gap={"3"}>
        {arr.map(() => {
          return (
            <ImageCard
              title={
                "Harry Potter e a pedra filosofial  [gravação de vídeo] = Harry Potter and the philosophers's stone / 2016"
              }
              year={"2016"}
              description={
                "Harry Potter e a pedra filosofial  [gravação de vídeo] = Harry Potter and the philosophers's stone / 2016"
              }
              image={
                "https://archivum.grupomarista.org.br/pergamumweb/vinculos/000015/0000150D.jpg"
              }
            />
          );
        })}
      </Flex>
    </div>
  );
}

export default App;
