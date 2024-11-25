import axiosClient from "@/shared/axios";
import { Book } from "@/shared/types";

export const fetchBooks = async (): Promise<Book[]> => {
  try {
    const { data } = await axiosClient.get(`books`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
