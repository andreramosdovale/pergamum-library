import { Box, Checkbox, Flex, Text } from "@radix-ui/themes";
import "./ReferenceCard.scss";

interface ICardProps {
  title: string;
  reference: string;
}

export function ReferenceCard({ title, reference }: ICardProps) {
  return (
    <Box className="card">
      <Flex direction={"row"} wrap={"wrap"} gap="3">
        <Box className="card-action">
          <Checkbox className="card-action-checkbox" size="3" />
        </Box>
        <div className="line" />
        <Flex direction={"column"} gap="3" className="card-content">
          <Text weight={"bold"} className="card-content-text">
            {title}
          </Text>
          <Text className="card-content-text">{reference}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
