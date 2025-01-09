import axiosClient from "@/shared/axios";

export const fetchReviews = async (bookId: number) => {
  const { data } = await axiosClient.get(`books/${bookId}/reviews`);
  return data;
};
