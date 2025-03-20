export interface BookSectionItem {
  id: number;
  title: string;
  isbn: string;
  averageRating: number;
  thumbnail?: string;
  cover?: string;
  reviewCount: number;
}

export type BookSectionList = BookSectionItem[] | undefined;
