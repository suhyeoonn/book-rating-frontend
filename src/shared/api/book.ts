import axios from "axios";
import { AddBook, Book } from "../types";
import axiosClient, { ssrAxiosClient } from "../axios";
import { getIsbn } from "../utils";

export const fetchBook = async (id: number): Promise<Book> => {
  try {
    const { data } = await axiosClient.get(`books/${id}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

export const patchBook = async (book: Book) => {
  try {
    await axiosClient.patch(`books/${book.id}`, book);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("존재하지 않는 책입니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};

export const deleteBook = async (bookId: number) => {
  try {
    await axiosClient.delete(`books/${bookId}`);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("리뷰가 등록된 책은 삭제할 수 없습니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
