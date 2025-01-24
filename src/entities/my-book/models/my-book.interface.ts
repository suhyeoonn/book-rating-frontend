import { Book } from "@/entities/book/types";
import { ReadingStatus } from "./reading-status.enum";
import { Review } from "@/entities/review/types";

export interface MyBook {
  id: number;
  status: ReadingStatus;
  authors: string;
  memo: string;
  createdAt: string;
  finishedAt: string;
  updatedAt: string;
  book: Book;
  review: Review;
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
