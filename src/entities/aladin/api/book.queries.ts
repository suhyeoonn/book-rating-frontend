import { queryOptions } from "@tanstack/react-query";
import { getItemLIst, getItemSearch } from "./aladin.api";

export const bookQueries = {
  all: () => ["books"] as const,

  byCategory: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "category", categoryId],
      queryFn: () => getItemLIst(categoryId),
      enabled: !keyword,
    }),

  search: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "search", categoryId, keyword],
      queryFn: () => getItemSearch(categoryId, keyword),
      enabled: !!keyword,
    }),
};
