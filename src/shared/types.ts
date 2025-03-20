// TODO: 정리

export interface Tag {
  id: number;
  name: string;
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
