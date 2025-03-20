import React from "react";
import BookReview from "./review-item";
import { ReviewResponseItem } from "../model/review-interface";
import SkeletonBookReview from "./skeleton-review-item";

interface Props {
  isFetching: boolean;
  data: ReviewResponseItem[] | undefined;
}
const ReviewList = ({ isFetching, data }: Props) => {
  if (isFetching) {
    return (
      <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mb-4 flex-grow space-y-4 overflow-auto pr-4">
        <SkeletonBookReview />
        <SkeletonBookReview />
        <SkeletonBookReview />
      </div>
    );
  }

  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mb-4 flex-grow space-y-4 overflow-auto pr-4">
      {data?.length === 0 ? (
        <div className="text-sm italic text-gray-500">
          아직 작성된 리뷰가 없어요. 내 리스트에서 첫 리뷰를 남겨보세요! ✍️
        </div>
      ) : (
        data?.map((c) => <BookReview key={c.id} review={c} />)
      )}
    </div>
  );
};

export default ReviewList;
