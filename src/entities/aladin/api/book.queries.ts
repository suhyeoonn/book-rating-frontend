import { queryOptions } from "@tanstack/react-query";
import { getItemList, getItemSearch } from "./aladin.api";

export const bookQueries = {
  all: () => ["books"] as const,

  newItems: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "newItems"],
      queryFn: () => getItemList(351, "ItemNewSpecial"),
    }),

  byCategory: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "category", categoryId],
      queryFn: () => getItemList(categoryId),
      enabled: !keyword,
    }),

  search: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "search", categoryId, keyword],
      queryFn: () => getItemSearch(categoryId, keyword),
      enabled: !!keyword,
    }),
};
