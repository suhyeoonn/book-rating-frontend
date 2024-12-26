import axiosClient from "@/shared/axios";
import axios from "axios";

export const deleteBook = async ({ id }: { id: number }) => {
  try {
    const res = await axiosClient.delete(`my-books/${id}`);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 401) {
        throw new Error("로그인이 필요합니다.");
      }
      throw new Error(`문제가 발생했습니다. 잠시 후에 시도하세요.`);
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
