import { queryOptions } from "@tanstack/react-query";

export const reviewQueries = {
  all: () => ["reviews"] as const,
  get: (id: number) =>
    queryOptions({
      queryKey: [...reviewQueries.all(), id],
      queryFn: () => {}, // TODO: Implement query function
    }),
};
