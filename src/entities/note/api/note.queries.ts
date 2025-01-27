import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { noteApi } from "./note-api";

export const noteQueries = {
  all: () => ["notes"] as const,

  list: (bookId: number | null) =>
    queryOptions({
      queryKey: [...noteQueries.all(), "list", bookId],
      queryFn: () => noteApi.getAll(bookId as number),
      placeholderData: keepPreviousData,
      enabled: !!bookId,
    }),
  // detail: (id: number) =>
  //   queryOptions({
  //     queryKey: [...noteQueries.all(), id],
  //     queryFn: () => getBook(id),
  //   }),
};
