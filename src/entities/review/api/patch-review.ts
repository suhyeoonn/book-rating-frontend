import axiosClient from "@/shared/axios";
import {
  UpdateCommentParams,
  UpdateRatingParams,
} from "../model/review.interface";
import axios from "axios";

export const updateRating = async ({
  reviewId,
  rating,
}: UpdateRatingParams) => {
  try {
    const res = await axiosClient.patch(`reviews/${reviewId}/rating`, {
      rating,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const updateComment = async ({
  reviewId,
  comment,
}: UpdateCommentParams) => {
  try {
    const res = await axiosClient.patch(`reviews/${reviewId}/comment`, {
      content: comment,
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
