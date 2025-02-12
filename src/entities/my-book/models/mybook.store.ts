import { create } from "zustand";

interface MyBookState {
  bookId: number | null;
  myBookId: number | null;
  setBookId: ({
    bookId,
    myBookId,
  }: {
    bookId: number;
    myBookId: number;
  }) => void;
}

export const useMyBookStore = create<MyBookState>()((set) => ({
  bookId: null,
  myBookId: null,
  setBookId: ({ bookId, myBookId }: { bookId: number; myBookId: number }) =>
    set(() => ({ bookId, myBookId })),
}));
