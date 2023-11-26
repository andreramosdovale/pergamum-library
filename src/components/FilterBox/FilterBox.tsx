import { useEffect, useState } from "react";
import { Box, Button, Flex, Select, TextField } from "@radix-ui/themes";
import { useExportStore } from "../../store/ExportStore";
import { useFilterStore } from "../../store/FilterStore";

import "./FilterBox.scss";

export function FilterBox() {
  const [disable, setDisable] = useState(true);
  const exportStore = useExportStore();
  const filterStore = useFilterStore();

  useEffect(() => {
    if (exportStore.selected.length > 0) {
      return setDisable(false);
    }

    return setDisable(true);
  }, [exportStore]);

  return (
    <Flex className="box" direction={"row"} wrap={"wrap"} gap="3">
      <Box grow={"1"}>
        <TextField.Input size="3" placeholder="Termo" />
      </Box>
      <div className="line" />
      <Select.Root
        size="3"
        defaultValue="ref"
        onValueChange={(value) =>
          filterStore.changeFilter({
            term: filterStore.filter.term,
            type: value,
          })
        }
      >
        <Select.Trigger />
        <Select.Content position="popper">
          <Select.Item value="ref">Referencia</Select.Item>
          <Select.Item value="type">Tipo de obra</Select.Item>
          <Select.Item value="img">Capa</Select.Item>
        </Select.Content>
      </Select.Root>
      <div className="line" />
      <Button size="3" variant="classic" disabled={disable}>
        Exportar
      </Button>
    </Flex>
  );
}
