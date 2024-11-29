import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { fetchBooks } from "./get-books";
import { getBook } from "./get-book";

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
};
