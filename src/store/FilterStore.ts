import { create } from "zustand";

type Item = {
  type: "img" | "ref" | "type";
  term: string;
};

type FilterStore = {
  filter: Item;
  changeFilter: (item: Item) => void;
};

export const useFilterStore = create<FilterStore>((set) => {
  return {
    filter: { type: "ref", term: "" },
    changeFilter: (item) => set({ filter: item }),
  };
});
