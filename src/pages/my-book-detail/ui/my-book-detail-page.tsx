"use client";

import React, { useEffect } from "react";
import BookInfo from "./book-info";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { menus } from "@/widgets/layout-header";
import { MemoEditor } from "@/features/my-books/write-memo";
import { RemoveButton } from "@/features/my-books/remove-book";
import { useQuery } from "@tanstack/react-query";
import { myBookApi } from "@/entities/my-book";
import { Lock } from "lucide-react";
import { useMyBookStore } from "@/entities/my-book/models/mybook.store";

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
  }, [myBook]);

  if (!myBook || isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:w-3/4 md:px-6 lg:w-1/2">
      <div className="flex justify-between">
        <Breadcrumb links={[menus[1]]} pathName={myBook.book.title} />
        <RemoveButton id={id} />
      </div>
      <BookInfo book={myBook} />
      <hr />
      <h3 className="mb-1 text-base font-medium text-slate-800 md:text-lg">
        Review
      </h3>
      {!myBook.review?.id ? (
        <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-50 p-10 text-sm italic">
          <Lock className="size-5" /> <p>후기를 등록하세요.</p>
        </div>
      ) : (
        <MemoEditor id={id} />
      )}
    </div>
  );
};
