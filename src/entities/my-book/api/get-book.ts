import { ssrAxiosClient } from "@/shared/axios";
import { MyBook } from "../types";

export const getBook = async (id: number): Promise<MyBook> => {
  try {
    const { data } = await ssrAxiosClient.get(`my-books/${id}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
