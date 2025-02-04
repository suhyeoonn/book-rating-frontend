import axios from "axios";
import axiosClient from "../axios";
import { AuthMeResponse, IRegisterUser } from "../types";

export const register = async (user: IRegisterUser) => {
  try {
    await axiosClient.post(`auth/register`, user);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      if (err.response.status === 400) {
        throw new Error("이미 존재하는 ID입니다.");
      }
    } else {
      console.error(err);
      throw new Error("Network Error");
    }
  }
};

export const me = async () => {
  try {
    const token = localStorage.getItem("jwt");
    const { data } = await axios.get<AuthMeResponse>(
      `http://localhost:8080/auth/me`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
