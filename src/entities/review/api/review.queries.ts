import { queryOptions } from "@tanstack/react-query";
import { getReview } from "./get-review";

export const reviewQueries = {
  all: () => ["reviews"] as const,
  get: (id: number | undefined) =>
    queryOptions({
      queryKey: [...reviewQueries.all(), id],
      queryFn: async () => {
        if (!id) return null;
        return await getReview(id);
      },
    }),
};
