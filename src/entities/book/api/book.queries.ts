import { queryOptions } from "@tanstack/react-query";
import {
  fetchBook,
  fetchBooks,
  mostAddedBooks,
  popularBooks,
} from "./get-book";

export const bookQueries = {
  all: () => ["books"] as const,

  list: (keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "list", keyword],
      queryFn: () => fetchBooks(keyword),
    }),

  detail: (id: number) =>
    queryOptions({
      queryKey: [...bookQueries.all(), id],
      queryFn: () => fetchBook(id),
    }),

  popular: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "popular"],
      queryFn: () => popularBooks(),
    }),

  mostAdded: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "mostAdded"],
      queryFn: () => mostAddedBooks(),
    }),
};
