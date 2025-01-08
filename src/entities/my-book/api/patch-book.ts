import {
  UpdateReviewParams,
  UpdateStatusParams,
} from "@/features/my-books/write-review/model/types";
import axiosClient from "@/shared/axios";
import axios from "axios";

export const updateReview = async ({ id, memo }: UpdateReviewParams) => {
  try {
    const res = await axiosClient.patch<UpdateReviewParams>(
      `my-books/${id}/memo`,
      {
        memo,
      },
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 403) {
        throw new Error("로그인이 필요합니다.");
      }
      throw new Error(`문제가 발생했습니다. 잠시 후에 시도하세요.`);
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};

export const updateStatus = async ({ id, status }: UpdateStatusParams) => {
  try {
    const res = await axiosClient.patch<UpdateReviewParams>(
      `my-books/${id}/status`,
      {
        status,
      },
    );
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 403) {
        throw new Error("로그인이 필요합니다.");
      }
      throw new Error(`문제가 발생했습니다. 잠시 후에 시도하세요.`);
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
