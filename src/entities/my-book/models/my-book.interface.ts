import { Book } from "@/entities/book/types";
import { ReadingStatusEnum } from "./reading-status";
import { Review } from "@/entities/review/types";

export interface MyBook {
  id: number;
  status: ReadingStatusEnum;
  authors: string;
  memo: string;
  createdAt: string;
  finishedAt: string;
  updatedAt: string;
  book: Book;
  review: Review;
}

export interface MyBookListItem {
  id: number;
  status: ReadingStatusEnum;
  createdAt: string;
  finishedAt: string;
  updatedAt: string;
  book: Book;
  rating: number;
}

export interface ExistsResponse {
  exists: boolean;
}

export interface UpdateReviewParams {
  id: number;
  memo: string;
}

export interface UpdateStatusParams {
  id: number;
  status: number;
}
