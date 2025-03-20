import { queryOptions } from "@tanstack/react-query";
import {
  fetchBook,
  fetchBooks,
  mostAddedBooks,
  popularBooks,
} from "./book.api";

export const bookQueries = {
  all: () => ["books"] as const,

  byCategory: (categoryId: number, keyword: string) =>
    queryOptions({
      queryKey: [...bookQueries.all(), "category", categoryId],
      queryFn: () => fetchBooks(categoryId, "Bestseller", 100),
      enabled: !keyword,
    }),

  detail: (id: number) =>
    queryOptions({
      queryKey: [...bookQueries.all(), id],
      queryFn: () => fetchBook(id),
    }),

  popular: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "popular"],
      queryFn: () => popularBooks(),
    }),

  mostAdded: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "mostAdded"],
      queryFn: () => mostAddedBooks(),
    }),

  bestseller: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "bestseller"],
      queryFn: () => fetchBooks(351, "Bestseller", 10),
    }),

  newItems: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "newItems"],
      queryFn: () => fetchBooks(351, "ItemNewSpecial", 10),
    }),
};
