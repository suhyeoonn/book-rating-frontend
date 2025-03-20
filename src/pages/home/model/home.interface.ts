export interface BookCardItem {
  title: string;
  isbn: string;
  averageRating: number;
  thumbnail: string;
  reviewCount: number;
}

export type BookSectionList = BookCardItem[] | undefined;
