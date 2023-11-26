import { Flex, Text } from "@radix-ui/themes";

interface ICardProps {
  type: string;
  description: string;
}

export function TypeFragment({ type, description }: ICardProps) {
  return (
    <Flex direction={"column"} gap="3" justify={"center"}>
      <Text weight={"bold"}>{description}</Text>
      <Text>{type}</Text>
    </Flex>
  );
}
