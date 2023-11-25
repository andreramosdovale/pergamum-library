import { Box, Checkbox, Flex, Text } from "@radix-ui/themes";
import "./ReferenceCard.scss";

interface ICardProps {
  title: string;
  year: string;
  reference: string;
}

export function ReferenceCard({ title, year, reference }: ICardProps) {
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
              <Text weight={"bold"}>{title}</Text>
            </Box>
            <div className="line line-header" />
            <Box>
              <Text weight={"bold"}>{year}</Text>
            </Box>
          </Flex>
          <Text className="card-content-text">{reference}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
