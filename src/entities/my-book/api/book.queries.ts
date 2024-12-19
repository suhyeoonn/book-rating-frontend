import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { fetchBooks } from "./get-books";
import { existBook, getBook } from "./get-book";

export const bookQueries = {
  all: () => ["userBooks"] as const,

  list: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "list"],
      queryFn: () => fetchBooks(),
      placeholderData: keepPreviousData,
    }),
  detail: (id: number) =>
    queryOptions({
      queryKey: [...bookQueries.all(), id],
      queryFn: () => getBook(id),
    }),
  exists: (isbn: string, userId: number | undefined) =>
    queryOptions({
      queryKey: [...bookQueries.all(), isbn, userId],
      queryFn: () => existBook(isbn),
      enabled: !!userId,
    }),
};
