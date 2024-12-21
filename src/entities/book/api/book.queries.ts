import { queryOptions } from "@tanstack/react-query";
import { fetchBook } from "./get-book";

export const bookQueries = {
  all: () => ["books"] as const,

  detail: (id: number) =>
    queryOptions({
      queryKey: [...bookQueries.all(), id],
      queryFn: () => fetchBook(id),
    }),
};
