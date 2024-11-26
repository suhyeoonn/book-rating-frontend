import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { fetchBooks } from "./get-books";

export const bookQueries = {
  all: () => ["userBooks"] as const,

  list: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "list"],
      queryFn: () => fetchBooks(),
      placeholderData: keepPreviousData,
    }),
};
