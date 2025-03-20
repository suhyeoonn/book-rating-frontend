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

export const popularBooks = async (): Promise<Book[]> => {
  try {
    const { data } = await axiosClient.get(`books/popular`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

export const mostAddedBooks = async (): Promise<Book[]> => {
  try {
    const { data } = await axiosClient.get(`books/most-added`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
