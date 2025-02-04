import axiosClient from "@/shared/axios";
import { MyBook } from "../types";
import { ExistsResponse } from "../models/my-book.interface";
import axios from "axios";

export const getBook = async (id: number): Promise<MyBook> => {
  try {
    const token = localStorage.getItem("jwt");
    const { data } = await axios.get(`http://localhost:8080/my-books/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data;
  } catch (err) {
    throw err;
  }
};

export const existBook = async (isbn: string): Promise<ExistsResponse> => {
  try {
    const { data } = await axiosClient.get(`my-books/exists?isbn=${isbn}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
