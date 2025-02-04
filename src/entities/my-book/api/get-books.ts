import axiosClient from "@/shared/axios";
import { MyBookListItem } from "../models/my-book.interface";
import axios from "axios";

export const getBooks = async (): Promise<MyBookListItem[]> => {
  try {
    const token = localStorage.getItem("jwt");
    const { data } = await axios.get(`http://localhost:8080/my-books`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
