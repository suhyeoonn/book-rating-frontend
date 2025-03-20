import React from "react";
import { useQuery } from "@tanstack/react-query";
import { reviewApi } from "@/entities/review";
import { Skeleton } from "@/shared/ui/skeleton";
import { Book } from "@/entities/aladin";
import ReviewList from "./review-list";

export const BookReviews = ({ book }: { book: Book }) => {
  const { isFetching, data } = useQuery(
    reviewApi.reviewQueries.list(book.isbn13),
  );

  return (
    <div className="flex flex-col border-t py-4">
      <h3 className="mb-4 text-base font-medium text-slate-800 md:text-lg">
        Reviews
      </h3>
      {isFetching ? (
        <Skeleton className="h-20 w-full" />
      ) : (
        <ReviewList isFetching={isFetching} data={data?.reviews} />
      )}
    </div>
  );
};
