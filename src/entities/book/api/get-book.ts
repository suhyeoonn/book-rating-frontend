import { ssrAxiosClient } from "@/shared/axios";
import { Book } from "../types";

export const fetchBook = async (id: number): Promise<Book> => {
  try {
    const { data } = await ssrAxiosClient.get(`books/${id}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
