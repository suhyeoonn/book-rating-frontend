import dayjs from "dayjs";
import StarGroup from "../../../shared/ui/star-group";
import { ReviewResponseItem } from "../model/review-interface";

export default function BookReview({ review }: { review: ReviewResponseItem }) {
  return (
    <div className="flex items-start gap-4 border-b border-b-gray-100">
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <StarGroup rating={review.rating} />
          </div>
          <div className="flex cursor-not-allowed items-center gap-1">
            <div className="space-x-1 text-xs">
              <span className="font-bold">{review.user.username}</span>
              <span className="text-gray-500">
                {dayjs(review.updatedAt).format("YYYY-MM-DD")}
              </span>
            </div>
          </div>
        </div>
        <p className="line-clamp-3 pb-2 text-sm leading-relaxed">
          {review.comment}
        </p>
      </div>
    </div>
  );
}
