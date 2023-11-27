import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useExportStore } from "../../store/ExportStore";
import { useFilterStore } from "../../store/FilterStore";

import "./FilterBox.scss";

export function FilterBox() {
  const [disable, setDisable] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [, setDebouncedInputValue] = useState<string>("");
  const [selectAllSelected, setSelectAllSelected] = useState<boolean>(true);

  const exportStore = useExportStore();
  const filterStore = useFilterStore();

  useEffect(() => {
    if (exportStore.selected.length > 0) {
      return setDisable(false);
    }

    return setDisable(true);
  }, [exportStore]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);

      filterStore.changeFilter({
        term: inputValue,
        type: filterStore.filter.type,
      });
    }, 500);

    return () => clearTimeout(delayInputTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, 500]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const onSelect = () => {
    setSelectAllSelected((state) => !state);

    if (selectAllSelected) {
      exportStore.apiData.forEach((item) => {
        exportStore.addToSelected({
          id: item.cod_acervo,
          reference: item.referencia_sem_tag,
        });
      });

      return true;
    }

    exportStore.clearSelected();
  };

  return (
    <Flex className="box" direction={"row"} wrap={"wrap"} gap="3">
      <Box grow={"1"}>
        <TextField.Input
          size="3"
          placeholder="Termo"
          value={inputValue}
          onChange={handleInputChange}
        />
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
      <Flex align={"center"} gap={"2"}>
        <Checkbox checked={!selectAllSelected} onClick={() => onSelect()} />
        <Text>{!selectAllSelected ? "Remover todos" : "Selecionar todos"}</Text>
      </Flex>
    </Flex>
  );
}
