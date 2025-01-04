import { queryOptions } from "@tanstack/react-query";
import { getReview } from "./get-review";

export const reviewQueries = {
  all: () => ["reviews"] as const,
  get: (id: number) =>
    queryOptions({
      queryKey: [...reviewQueries.all(), id],
      queryFn: () => getReview(id),
    }),
};
