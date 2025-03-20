import { Book } from "@/entities/book/types";
import { Book as AladinBook } from "@/entities/aladin";
import axiosClient from "@/shared/axios";
import axios from "axios";
import { ReadingStatusEnum } from "../types";

export const postBook = async (
  book: AladinBook & { status: ReadingStatusEnum },
) => {
  try {
    const res = await axiosClient.post<Book>(`/my-books`, {
      ...book,
      thumbnail: book.cover,
      contents: book.description,
      isbn: book.isbn13,
      datetime: new Date(book.pubDate).toISOString(),
      authors: book.author,
      url: book.link,
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
