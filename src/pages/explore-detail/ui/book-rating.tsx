import React from "react";
import { useQuery } from "@tanstack/react-query";
import StarGroup from "@/shared/ui/star-group";
import { Skeleton } from "@/shared/ui/skeleton";
import { reviewQueries } from "@/entities/review/api";

export const BookRating = ({ isbn }: { isbn: string }) => {
  const { isFetching, data } = useQuery(reviewQueries.list(isbn));

  return (
    <div className="flex justify-between">
      {isFetching ? (
        <Skeleton className="h-5 w-32" />
      ) : (
        <div className="flex items-center gap-1">
          <StarGroup rating={data?.averageRating ?? 0} />
          <span className="text-xs font-bold">
            {data?.averageRating ?? "0"}
          </span>
        </div>
      )}
    </div>
  );
};
