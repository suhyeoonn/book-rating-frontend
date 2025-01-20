import { Book } from "@/entities/my-book/models/data-table.interface";
import axiosClient from "@/shared/axios";

export const getBooks = async (): Promise<Book[]> => {
  try {
    const { data } = await axiosClient.get(`my-books`);

    return data;
  } catch (error) {
    throw error;
  }
};
