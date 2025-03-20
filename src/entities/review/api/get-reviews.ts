import axiosClient from "@/shared/axios";

export const fetchReviews = async (isbn13: string) => {
  const { data } = await axiosClient.get(`books/${isbn13}/reviews`);
  return data;
};
