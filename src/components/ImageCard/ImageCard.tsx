import { Box, Checkbox, Flex, Inset, Text } from "@radix-ui/themes";
import "./ImageCard.scss";

interface ICardProps {
  title: string;
  year: string;
  description: string;
  image: string;
}

export function ImageCard({ title, year, description, image }: ICardProps) {
  return (
    <Box className="card">
      <Flex direction={"row"} gap="3">
        <Box className="card-action">
          <Checkbox className="card-action-checkbox" size="3" />
        </Box>
        <div className="line line-action" />
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src={image}
            alt={description}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 140,
              backgroundColor: "var(--gray-5)",
            }}
          />
        </Inset>
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
          <Text className="card-content-text">{description}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}
