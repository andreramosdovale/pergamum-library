import { create } from "zustand";
import { bookResponse } from "../types/response";

type Item = {
  id: string;
  reference: string;
};

type ExportStore = {
  selected: Item[];
  apiData: bookResponse[];
  addToSelected: (item: Item) => void;
  removeFromSelected: (id: string) => void;
  addToApiData: (itens: bookResponse[]) => void;
  clearSelected: () => void;
};

export const useExportStore = create<ExportStore>((set) => {
  return {
    selected: [],
    apiData: [],
    addToSelected: (item) =>
      set((state) => ({ selected: [...state.selected, item] })),
    removeFromSelected: (id) =>
      set((state) => ({
        selected: state.selected.filter((item) => item.id !== id),
      })),
    clearSelected: () => set({ selected: [] }),
    addToApiData: (itens) => set({ apiData: itens }),
  };
});
