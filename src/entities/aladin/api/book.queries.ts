import { queryOptions } from "@tanstack/react-query";
import { getItemSearch } from "./aladin.api";
import { Book } from "@/entities/book/types";
import { convertToBookType } from "../lib/convertToBookType";

export const aladinQueries = {
  all: () => ["books"] as const,

  search: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...aladinQueries.all(), "search", categoryId, keyword],
      queryFn: () => getItemSearch(categoryId, keyword),
      enabled: !!keyword,
      select(data): Book[] {
        return data?.map(convertToBookType);
      },
    }),
};
