import { queryOptions } from "@tanstack/react-query";
import { getReview } from "./get-review";
import { fetchReviews } from "./get-reviews";

export const reviewQueries = {
  all: () => ["reviews"] as const,

  list: (isbn: string) =>
    queryOptions({
      queryKey: [...reviewQueries.all(), "list", isbn],
      queryFn: () => fetchReviews(isbn),
    }),

  get: (id: number | undefined) =>
    queryOptions({
      queryKey: [...reviewQueries.all(), id],
      queryFn: async () => {
        if (!id) return;
        return await getReview(id);
      },
    }),
};
