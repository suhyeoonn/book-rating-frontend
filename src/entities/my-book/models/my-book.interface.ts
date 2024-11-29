import { Book } from "@/entities/book/types";
import { Status } from "./status.enum";

export interface MyBook {
  id: number;
  title: string;
  rating: number;
  status: Status;
  score: number;
  authors: string;
  createdDate: string;
  finishedDate: string;
  book: Book;
}
