import axios from "axios";

export const noteServiceAxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOTE_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
