import axios from "axios";
import {
  AddReview,
  AddReviewResponse,
  DeleteReviewResponse,
  Review,
} from "../types";
import axiosClient from "../axios";
import { toast } from "../hooks/use-toast";

export const fetchReviews = async (bookId: number) => {
  const { data } = await axiosClient.get(`books/${bookId}/reviews`);
  return data;
};

export const postReview = async ({
  bookId,
  review,
}: {
  bookId: number;
  review: AddReview;
}) => {
  try {
    return await axiosClient.post<AddReviewResponse>(
      `books/${bookId}/reviews`,
      review
    );
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("존재하지 않는 책입니다.");
      } else if (err.response.status === 401) {
        throw new Error("로그인이 필요합니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};

export const patchReview = async ({
  bookId,
  review,
}: {
  bookId: number;
  review: Review;
}) => {
  try {
    await axiosClient.patch(`books/${bookId}/reviews/${review.id}`, review);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("존재하지 않는 책입니다.");
      } else if (err.response.status === 401) {
        throw new Error("로그인이 필요합니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};

export const deleteReview = async ({
  bookId,
  reviewId,
}: {
  bookId: number;
  reviewId: number;
}) => {
  try {
    return await axiosClient.delete<DeleteReviewResponse>(
      `books/${bookId}/reviews/${reviewId}`
    );
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("존재하지 않는 책입니다.");
      } else if (err.response.status === 401) {
        throw new Error("로그인이 필요합니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
