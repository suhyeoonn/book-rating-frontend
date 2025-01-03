import { IUser } from "@/shared/types";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: IUser;
  token: string;
}
