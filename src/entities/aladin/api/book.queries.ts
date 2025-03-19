import { queryOptions } from "@tanstack/react-query";
import { fetchBooks } from "./aladin.api";

export const bookQueries = {
  all: () => ["books"] as const,

  list: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "list", categoryId, keyword],
      queryFn: () => fetchBooks(categoryId, keyword),
    }),
};
