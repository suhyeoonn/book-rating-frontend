export interface Book {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  bestRank: number;
  seriesInfo?: SeriesInfo;
  subInfo?: SubInfo;
}

export interface SeriesInfo {
  seriesId: number;
  seriesLink: string;
  seriesName: string;
}

export interface SubInfo {
  // API에서 `subInfo`가 빈 객체 `{}`로 오므로, 실제 필드가 필요하면 여기에 정의
}
