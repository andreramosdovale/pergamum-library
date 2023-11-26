import { create } from "zustand";

type Item = {
  type: "img" | "ref" | "type";
  term: string;
};

type FilterStore = {
  filter: Item;
  changeState: (item: Item) => void;
};

export const useFilterStore = create<FilterStore>((set) => {
  return {
    filter: { type: "", term: "ref" },
    changeState: (item) => set({ filter: item }),
  };
});
