import React from "react";
import { getBook } from "@/entities/my-book/api";
import BookInfo from "./book-info";
import ReviewForm from "@/components/review/review-form";
import { Breadcrumb } from "@/features/move-page";

interface Props {
  id: number;
}
export const MyBookDetailPage = async ({ id }: Props) => {
  const myBook = await getBook(id);

  return (
    <div className="container md:w-3/4 lg:w-1/2 mx-auto py-8 px-4 md:px-6 flex flex-col  gap-6">
      <Breadcrumb
        links={[{ href: "/my-books", label: "내 책장" }]}
        pathName={myBook.book.title}
      />
      <BookInfo book={myBook} />
      <hr />
      <ReviewForm myBook={myBook} />
    </div>
  );
};
