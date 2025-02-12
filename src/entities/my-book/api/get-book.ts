import axiosClient from "@/shared/axios";
import { MyBook } from "../types";
import { BookStatusResponse } from "../models/my-book.interface";
import axios from "axios";

export const getBook = async (id: number): Promise<MyBook> => {
  try {
    const { data } = await axiosClient.get(`/my-books/${id}`);

    return data;
  } catch (err) {
    throw err;
  }
};

export const getBookStatus = async (
  isbn: string,
): Promise<BookStatusResponse> => {
  try {
    const { data } = await axiosClient.get(`my-books/exists?isbn=${isbn}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
