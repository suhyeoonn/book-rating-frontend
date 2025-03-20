import { queryOptions } from "@tanstack/react-query";
import { getItemList, getItemSearch } from "./aladin.api";
import { BookCardItem } from "@/pages/home/model/home.interface";

export const aladinQueries = {
  all: () => ["books"] as const,

  newItems: () =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "newItems"],
      queryFn: () => getItemList(351, "ItemNewSpecial"),
      select(data): BookCardItem[] {
        return data?.map((d) => ({
          ...d,
          thumbnail: d.cover,
          reviewCount: 0,
          averageRating: 0,
        }));
      },
    }),

  bestseller: () =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "bestseller"],
      queryFn: () => getItemList(351, "Bestseller"),
      select(data): BookCardItem[] {
        return data?.map((d) => ({
          ...d,
          thumbnail: d.cover,
          reviewCount: 0,
          averageRating: 0,
        }));
      },
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
