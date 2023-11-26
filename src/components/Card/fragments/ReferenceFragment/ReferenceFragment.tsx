import { Flex, Text } from "@radix-ui/themes";

interface ICardProps {
  description: string;
  reference: string;
}

export function ReferenceFragment({ description, reference }: ICardProps) {
  return (
    <Flex direction={"column"} gap="3" justify={"center"}>
      <Text weight={"bold"}>{description}</Text>
      <Text>{reference}</Text>
    </Flex>
  );
}
