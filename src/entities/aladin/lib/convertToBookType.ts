import { Book } from "@/entities/book/types";
import { Book as aladinBook } from "../model/aladin.interface";

export const convertToBookType = (book: aladinBook): Book => ({
  ...book,
  isbn: book.isbn13,
  thumbnail: book.cover,
  id: 0,
  tags: [],
  reviewCount: 0,
  averageRating: 0,
  contents: book.description,
  datetime: book.pubDate,
  url: book.link,
  authors: book.author,
});
