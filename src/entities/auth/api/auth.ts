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
    throw err;
  }
};
