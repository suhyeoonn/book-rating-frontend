export interface Review {
  id: number;
  bookId: number;
  rating: number;
  comment: string;
  updatedAt: string;
  userId: number;
}

export interface UpdateRatingParams {
  reviewId: number;
  rating: number;
}

export interface UpdateCommentParams {
  reviewId: number;
  comment: string;
}
