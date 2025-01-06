import axiosClient, { ssrAxiosClient } from "@/shared/axios";
import { Book } from "../types";

export const fetchBooks = async (keyword?: string): Promise<Book[]> => {
  try {
    const { data } = await axiosClient.get(`books?title=${keyword}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

export const fetchBook = async (id: number): Promise<Book> => {
  try {
    const { data } = await ssrAxiosClient.get(`books/${id}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
