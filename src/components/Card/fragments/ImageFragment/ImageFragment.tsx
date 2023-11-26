import { Inset, Text } from "@radix-ui/themes";

interface ICardProps {
  description: string;
  image: string;
}

export function ImageFragment({ description, image }: ICardProps) {
  return (
    <>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={image}
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <div className="card-line" />
      <Text weight={"bold"} className="card-content-text">
        {description}
      </Text>
    </>
  );
}
