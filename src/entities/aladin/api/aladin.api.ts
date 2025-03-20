"use server";

import axios from "axios";
import { Book } from "../model/aladin.interface";

// NOTE: 알라딘 API 매뉴얼
// https://docs.google.com/document/d/1mX-WxuoGs8Hy-QalhHcvuV17n50uGI2Sg_GHofgiePE/edit?tab=t.0

export const getItemLIst = async (categoryId: number): Promise<Book[]> => {
  try {
    const { data } = await axios.get(
      `http://www.aladin.co.kr/ttb/api/ItemList.aspx`,
      {
        params: {
          ttbkey: process.env.ALADIN_SERVICE_KEY,
          QueryType: "Bestseller",
          MaxResults: 100,
          start: 1,
          SearchTarget: "Book",
          output: "js",
          Version: "20131101",
          CategoryID: categoryId,
          Cover: "Big",
        },
      },
    );

    return data?.item;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

export const getItemSearch = async (
  categoryId: number,
  keyword?: string,
): Promise<Book[]> => {
  try {
    const { data } = await axios.get(
      `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx`,
      {
        params: {
          Query: keyword,
          ttbkey: process.env.ALADIN_SERVICE_KEY,
          QueryType: "Bestseller",
          MaxResults: 100,
          start: 1,
          SearchTarget: "Book",
          output: "js",
          Version: "20131101",
          CategoryID: categoryId,
          Cover: "Big",
        },
      },
    );

    return data?.item;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};

export const getItemLookUp = async (isbn13: string): Promise<Book[]> => {
  try {
    const { data } = await axios.get(
      `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx`,
      {
        params: {
          ItemId: isbn13,
          ItemIdType: "ISBN13",
          ttbkey: process.env.ALADIN_SERVICE_KEY,
          QueryType: "Bestseller",
          MaxResults: 100,
          start: 1,
          SearchTarget: "Book",
          output: "js",
          Version: "20131101",
          Cover: "Big",
          OptResult: "ratingInfo,bestSellerRank",
        },
      },
    );

    console.log(data?.item?.[0]);
    return data?.item?.[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch data.");
  }
};
