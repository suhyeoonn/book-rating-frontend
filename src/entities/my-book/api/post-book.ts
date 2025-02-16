import { Book } from "@/entities/book/types";
import axiosClient from "@/shared/axios";
import { AddBook } from "@/shared/types";
import { getIsbn } from "@/shared/utils";
import axios from "axios";
import { ReadingStatusEnum } from "../types";

export const postBook = async (
  book: AddBook & { status: ReadingStatusEnum },
) => {
  try {
    const res = await axiosClient.post<Book>(`/my-books`, {
      ...book,
      isbn: getIsbn(book.isbn),
      tags: [],
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 409) {
        throw new Error("이미 등록된 책입니다.");
      } else if (err.response.status === 403) {
        throw new Error("로그인이 필요합니다.");
      }
      throw new Error(`문제가 발생했습니다. 잠시 후에 시도하세요.`);
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
