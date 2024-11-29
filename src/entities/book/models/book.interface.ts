import { Tag } from "@/shared/types";

export interface Book {
  id: number;
  title: string;
  isbn: string;
  tags: Tag[];
  averageRating: number;
  thumbnail: string;
  reviewCount: number;
  contents: string;
  datetime: string;
  url: string;
  authors: string;
  publisher: string;
}
