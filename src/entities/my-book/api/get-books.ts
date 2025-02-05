import axiosClient from "@/shared/axios";
import { MyBookListItem } from "../models/my-book.interface";
import axios from "axios";

export const getBooks = async (): Promise<MyBookListItem[]> => {
  try {
    const { data } = await axiosClient.get(`/my-books`);

    return data;
  } catch (error) {
    throw error;
  }
};
