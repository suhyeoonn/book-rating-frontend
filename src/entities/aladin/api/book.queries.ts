import { queryOptions } from "@tanstack/react-query";
import { getItemList, getItemSearch } from "./aladin.api";

export const aladinQueries = {
  all: () => ["books"] as const,

  newItems: () =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "newItems"],
      queryFn: () => getItemList(351, "ItemNewSpecial"),
    }),

  bestseller: () =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "bestseller"],
      queryFn: () => getItemList(351, "Bestseller"),
    }),

  byCategory: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "category", categoryId],
      queryFn: () => getItemList(categoryId, "Bestseller", 100),
      enabled: !keyword,
    }),

  search: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "search", categoryId, keyword],
      queryFn: () => getItemSearch(categoryId, keyword),
      enabled: !!keyword,
    }),
};
