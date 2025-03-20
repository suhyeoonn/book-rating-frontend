import { queryOptions } from "@tanstack/react-query";
import { getItemSearch } from "./aladin.api";
import { Book } from "@/entities/book/types";

export const aladinQueries = {
  all: () => ["books"] as const,

  search: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "search", categoryId, keyword],
      queryFn: () => getItemSearch(categoryId, keyword),
      enabled: !!keyword,
      select(data): Book[] {
        return data?.map((d) => ({
          ...d,
          isbn: d.isbn13,
          thumbnail: d.cover,
          id: 0,
          tags: [],
          reviewCount: 0,
          averageRating: 0,
          contents: d.description,
          datetime: d.pubDate,
          url: d.link,
          authors: d.author,
        }));
      },
    }),
};
