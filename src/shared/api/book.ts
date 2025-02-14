import axios from "axios";
import { Book } from "@/entities/book/types";
import axiosClient from "../axios";

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
