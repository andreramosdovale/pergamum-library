import { Box, Checkbox, Flex } from "@radix-ui/themes";
import { useExportStore } from "../../store/ExportStore";
// import { useFilterStore } from "../../store/FilterStore";
import { ImageFragment } from "./fragments/ImageFragment";
import { TypeFragment } from "./fragments/TypeFragment";
import { ReferenceFragment } from "./fragments/ReferenceFragment";

import "./Card.scss";

interface ICardProps {
  id: string;
  reference: string;
  image: string;
  description: string;
  type: string;
}

export function Card({ id, reference, image, description, type }: ICardProps) {
  const exportStore = useExportStore();
  // const filterStore = useFilterStore();
  const cards = {
    img: <ImageFragment description={description} image={image} />,
    type: <TypeFragment description={description} type={type} />,
    ref: <ReferenceFragment description={description} reference={reference} />,
  };

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = e.target.value;

    return checkItemIsSelect(selectedId)
      ? exportStore.removeFromSelected(selectedId)
      : exportStore.addToSelected({ id: selectedId, reference });
  };

  const checkItemIsSelect = (id: string): boolean => {
    return exportStore.selected.find((item) => item.id === id) ? true : false;
  };

  const ChoseCardType = (): JSX.Element => {
    const cardType = "ref";

    return cards[cardType];
  };

  return (
    <Box className="card">
      <Flex direction={"row"} gap="3">
        <Box className="card-action">
          <Checkbox
            className="card-action-checkbox"
            size="3"
            value={id}
            onClick={(e) => onSelect(e)}
          />
        </Box>
        <div className="card-line" />
        <ChoseCardType />
      </Flex>
    </Box>
  );
}
