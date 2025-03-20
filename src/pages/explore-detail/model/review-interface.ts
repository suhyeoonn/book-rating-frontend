import { Review } from "@/entities/review/types";
import { IUser } from "@/shared/types";

export interface ReviewResponse {
  bookId: number;
  reviews: ReviewResponseItem[];
  averageRating: number;
}

export type ReviewResponseItem = Review & { user: IUser };

export interface DeleteReviewResponse {
  averageRating: number;
}
