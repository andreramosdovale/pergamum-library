import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  const sendEmail = () => {};

  return (
    <>
      <Dialog.Root>
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
          <Dialog.Trigger>
            <Button
              size="3"
              variant="classic"
              disabled={disable}
              className="box-btn"
            >
              Exportar
            </Button>
          </Dialog.Trigger>
          <Flex align={"center"} gap={"2"}>
            <Checkbox checked={!selectAllSelected} onClick={() => onSelect()} />
            <Text>
              {!selectAllSelected ? "Remover todos" : "Selecionar todos"}
            </Text>
          </Flex>
        </Flex>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Exportar</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Envie os dados selecionados para seu Email.
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Nome
              </Text>
              <TextField.Input
                placeholder="Digite seu nome."
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Email
              </Text>
              <TextField.Input
                placeholder="Digite seu Email."
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={() => sendEmail()}>Enviar</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
