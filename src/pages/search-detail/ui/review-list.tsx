import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Book } from "@/entities/book/types";
import BookReview from "./review-item";
import { ReviewResponse } from "../model/review-interface";
import { reviewApi } from "@/entities/review";

interface Props {
  selectedBook: Book;
}
const ReviewList = ({ selectedBook }: Props) => {
  const { isPending, isError, data, error } = useQuery<ReviewResponse>({
    queryKey: ["reviews", selectedBook],
    queryFn: () => reviewApi.fetchReviews(selectedBook.id),
    enabled: !!selectedBook?.id,
  });

  return (
    <>
      <div className="flex flex-col border-t py-4">
        <h3 className="mb-4 text-base font-medium text-slate-800 md:text-lg">
          Reviews
        </h3>
        <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mb-4 flex-grow space-y-4 overflow-auto pr-4">
          {data?.reviews.length === 0 ? (
            <div className="text-sm italic text-gray-500">
              아직 작성된 리뷰가 없어요. 내 리스트에서 첫 리뷰를 남겨보세요! ✍️
            </div>
          ) : (
            data?.reviews.map((c) => <BookReview key={c.id} review={c} />)
          )}
        </div>
      </div>
    </>
  );
};

export default ReviewList;
