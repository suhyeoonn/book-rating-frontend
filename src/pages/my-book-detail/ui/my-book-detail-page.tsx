"use client";

import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { myBookApi } from "@/entities/my-book";
import { useMyBookStore } from "@/entities/my-book/models/mybook.store";
import { MyBookHeader } from "./my-book-header";
import { MyBookContent } from "./my-book-content";
import { MyBookReviewSection } from "./my-book-review-section";

interface Props {
  id: number;
}
export const MyBookDetailPage = ({ id }: Props) => {
  const { data: myBook, isFetching } = useQuery(
    myBookApi.bookQueries.detail(id),
  );

  const setBookId = useMyBookStore((state) => state.setBookId);

  useEffect(() => {
    if (!myBook) return;

    setBookId({ myBookId: id, bookId: myBook?.book.id });
  }, [id, myBook]);

  if (!myBook || isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:w-3/4 md:px-6 lg:w-1/2">
      <MyBookHeader id={id} title={myBook.book.title} />
      <MyBookContent myBook={myBook} />
      <hr />
      <MyBookReviewSection myBook={myBook} id={id} />
    </div>
  );
};
