export interface Review {
  id: number;
  bookId: number;
  rating: number;
  content: string;
  updatedAt: string;
  userId: number;
}

export interface UpdateRatingParams {
  reviewId: number;
  rating: number;
}
