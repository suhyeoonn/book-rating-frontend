import { create } from "zustand";

interface MyBookState {
  bookId: number | null;
  setBookId: (bookId: number) => void;
}

export const useMyBookStore = create<MyBookState>()((set) => ({
  bookId: null,
  setBookId: (bookId: number) => set(() => ({ bookId })),
}));
