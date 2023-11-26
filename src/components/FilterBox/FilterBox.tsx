import { Box, Button, Flex, Select, TextField } from "@radix-ui/themes";
import "./FilterBox.scss";

export function FilterBox() {
  return (
    <Flex className="box" direction={"row"} wrap={"wrap"} gap="3">
      <Box grow={"1"}>
        <TextField.Input size="3" placeholder="Termo" />
      </Box>
      <div className="line" />
      <Select.Root size="3" defaultValue="ref">
        <Select.Trigger />
        <Select.Content position="popper">
          <Select.Item value="ref">Referencia</Select.Item>
          <Select.Item value="type">Tipo de obra</Select.Item>
          <Select.Item value="img">Capa</Select.Item>
        </Select.Content>
      </Select.Root>
      <div className="line" />
      <Button size="3" variant="classic">
        Filtrar
      </Button>
      <div className="line" />
      <Button size="3" variant="outline">
        Exportar
      </Button>
    </Flex>
  );
}
