import axios from "axios";
import { KakaoResponseBook } from "../model/kakao-interface";
import { useState } from "react";

export const useSearchBook = () => {
  const [data, setData] = useState<KakaoResponseBook[]>();

  const handleSearchBook = async (keyword: string) => {
    if (!keyword) {
      setData([]);
      return;
    }

    const { data } = await axios.get(`/api/kakao/books?keyword=${keyword}`);
    setData(
      data.documents.map((d: KakaoResponseBook) => ({
        ...d,
        authors: d.authors,
      }))
    );
  };
  return { handleSearchBook, data };
};
