import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getBooks } from "./get-books";
import { getBookStatus, getBook } from "./get-book";
import { IUser } from "@/shared/types";

export const bookQueries = {
  all: () => ["userBooks"] as const,

  list: () =>
    queryOptions({
      queryKey: [...bookQueries.all(), "list"],
      queryFn: () => getBooks(),
      placeholderData: keepPreviousData,
    }),
  detail: (id: number) =>
    queryOptions({
      queryKey: [...bookQueries.all(), id],
      queryFn: () => getBook(id),
    }),
  status: (isbn: string, user: IUser | null) =>
    queryOptions({
      queryKey: [...bookQueries.all(), isbn],
      queryFn: () => getBookStatus(isbn),
      enabled: !!user,
    }),
};
