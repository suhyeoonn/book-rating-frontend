import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { noteApi } from "./note.api";

export const noteQueries = {
  all: () => ["notes"] as const,

  list: (myBookId: number | null) =>
    queryOptions({
      queryKey: [...noteQueries.all(), "list", myBookId],
      queryFn: () => noteApi.getAll(myBookId as number),
      placeholderData: keepPreviousData,
      enabled: !!myBookId,
    }),
};
