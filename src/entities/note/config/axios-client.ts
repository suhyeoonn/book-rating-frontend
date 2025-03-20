import axios from "axios";

export const noteServiceAxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NOTE_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 모든 요청에 JWT 추가
noteServiceAxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
