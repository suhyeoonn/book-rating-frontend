import { Book } from "@/entities/book/types";
import axiosClient from "@/shared/axios";
import { AddBook } from "@/shared/types";
import { getIsbn } from "@/shared/utils";
import axios from "axios";

export const postBook = async ({
  isbn,
  title,
  thumbnail,
  contents,
  datetime,
  url,
  authors,
  publisher,
}: AddBook) => {
  try {
    const res = await axiosClient.post<Book>(`my-books`, {
      isbn: getIsbn(isbn),
      title,
      thumbnail,
      tags: [],
      contents,
      datetime,
      url,
      authors: authors.join(", "),
      publisher,
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 409) {
        throw new Error("이미 등록된 책입니다.");
      } else if (err.response.status === 401) {
        throw new Error("로그인이 필요합니다.");
      }
      throw new Error(`문제가 발생했습니다. 잠시 후에 시도하세요.`);
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
