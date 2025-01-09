import axiosClient from "@/shared/axios";
import { AddReviewResponse } from "../model/review.interface";
import axios from "axios";

export const postReview = async ({
  myBookId,
  content,
  rating,
}: {
  myBookId: number;
  content: string;
  rating: number;
}) => {
  try {
    return await axiosClient.post<AddReviewResponse>(
      `my-books/${myBookId}/review`,
      {
        comment: content,
        rating,
      },
    );
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("존재하지 않는 책입니다.");
      } else if (err.response.status === 403) {
        throw new Error("로그인이 필요합니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
