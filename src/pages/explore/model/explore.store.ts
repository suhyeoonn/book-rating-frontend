import { create } from "zustand";

interface ExploreState {
  keyword: string;
  category: number;
  setCategory: (category: number) => void;
  setKeyword: (keyword: string) => void;
}

export const useExploreStore = create<ExploreState>()((set) => ({
  keyword: "",
  category: 351,
  setCategory: (newCategory) =>
    set((state) => ({ ...state, category: newCategory })),
  setKeyword: (keyword) => set((state) => ({ ...state, keyword })),
}));
