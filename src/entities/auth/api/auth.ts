import axios from "axios";
import { LoginParams, LoginResponse } from "../model/auth.interface";
import axiosClient from "@/shared/axios";

export const login = async (loginInfo: LoginParams) => {
  try {
    const { data } = await axiosClient.post<LoginResponse>(
      `auth/login`,
      loginInfo,
    );
    return data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 403) {
        throw new Error("아이디 또는 패스워드를 확인하세요.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};
