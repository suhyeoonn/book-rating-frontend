import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getBooks } from "./get-books";
import { existBook, getBook } from "./get-book";

export const bookQueries = {
  all: () => ["userBooks"] as const,

  list: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "list"],
      queryFn: () => getBooks(),
      placeholderData: keepPreviousData,
    }),
  detail: (id: number) =>
    queryOptions({
      queryKey: [...bookQueries.all(), id],
      queryFn: () => getBook(id),
    }),
  exists: (isbn: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), isbn],
      queryFn: () => existBook(isbn),
    }),
};
