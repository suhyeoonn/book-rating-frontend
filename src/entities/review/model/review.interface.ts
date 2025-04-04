export interface Review {
  id: number;
  bookId: number;
  rating: number;
  comment: string;
  updatedAt: string;
  userId: number;
  levels: number[];
}

export interface UpdateRatingParams {
  reviewId: number;
  rating: number;
}

export interface UpdateCommentParams {
  reviewId: number;
  comment: string;
}

export interface AddReviewResponse {
  review: Review;
  averageRating: number;
}
