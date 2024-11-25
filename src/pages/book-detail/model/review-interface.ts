import { IUser, Review } from "@/shared/types";

export interface ReviewResponse {
  bookId: number;
  reviews: ReviewResponseItem[];
}

export type ReviewResponseItem = Review & { user: IUser };

export interface DeleteReviewResponse {
  averageRating: number;
}
