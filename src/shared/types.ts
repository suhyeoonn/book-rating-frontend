// TODO: 정리

export interface AddBook {
  title: string;
  isbn: string;
  tags?: number[];
  thumbnail: string;
  contents: string;
  datetime: string;
  url: string;
  authors: string;
  publisher: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Review {
  id: number;
  rating: number;
  content: string;
  updateAt?: string;
}

export interface AddReviewResponse {
  review: Review;
  averageRating: number;
}

export type Fn = () => void;

export interface Tag {
  id: number;
  name: string;
}

export interface IUser {
  id: number;
  username: string;
}

export interface AuthMeResponse {
  user: IUser;
  token: string;
}

export interface IRegisterUser {
  username: string;
  password: string;
}

export interface ILoginUser {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: IUser;
  token: string;
}
