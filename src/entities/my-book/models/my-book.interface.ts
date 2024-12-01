import { Book } from "@/entities/book/types";
import { Status } from "./status.enum";

export interface MyBook {
  id: number;
  title: string;
  rating: number;
  status: Status;
  authors: string;
  review: string;
  createdAt: string;
  finishedAt: string;
  updatedAt: string;
  book: Book;
}
