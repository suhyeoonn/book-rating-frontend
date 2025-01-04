import axiosClient from "@/shared/axios";
import { Review } from "../types";

export const getReview = async (id: number): Promise<Review> => {
  try {
    const { data } = await axiosClient.get(`reviews/${id}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
