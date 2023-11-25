import { Box, Checkbox, Flex, Text } from "@radix-ui/themes";
import { bookResponse } from "../../types/response";
import "./index.scss";

function ReferenceCard(book: bookResponse) {
  return (
    <Box className="card">
      <Flex direction={"row"} gap="3">
        <Box className="card-action">
          <Checkbox className="card-action-checkbox" size="3" />
        </Box>
        <div className="line line-action" />
        <Flex direction={"column"} gap="3" className="card-content">
          <Flex direction={"row"} gap="3" className="card-content-header">
            <Box>
              <Text weight={"bold"}>{book.obra}</Text>
            </Box>
            <div className="line line-header" />
            <Box>
              <Text weight={"bold"}>{book.ano_publicacao}</Text>
            </Box>
          </Flex>
          <Text className="card-content-text">{book.referencia_sem_tag}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ReferenceCard;
