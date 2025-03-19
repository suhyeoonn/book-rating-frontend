import { queryOptions } from "@tanstack/react-query";
import { fetchBooksByCategory, fetchBooksByKeyword } from "./aladin.api";

export const bookQueries = {
  all: () => ["books"] as const,

  byCategory: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "category", categoryId],
      queryFn: () => fetchBooksByCategory(categoryId),
      enabled: !keyword,
    }),

  search: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "search", categoryId, keyword],
      queryFn: () => fetchBooksByKeyword(categoryId, keyword),
      enabled: !!keyword,
    }),
};
