import queryService from "./services/query";

function App() {
  const call = async () => {
    const data = await queryService.books("LIVRE", "harry+potter");
    console.log(data);
  };

  call();
  return <></>;
}

export default App;
