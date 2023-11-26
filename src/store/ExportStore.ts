import { create } from "zustand";

type Item = {
  id: string;
  reference: string;
};

type ExportStore = {
  selected: Item[];
  addToSelected: (item: Item) => void;
  removeFromSelected: (id: string) => void;
};

export const useExportStore = create<ExportStore>((set) => {
  return {
    selected: [],
    addToSelected: (item) =>
      set((state) => ({ selected: [...state.selected, item] })),
    removeFromSelected: (id) =>
      set((state) => ({
        selected: state.selected.filter((item) => item.id !== id),
      })),
  };
});
