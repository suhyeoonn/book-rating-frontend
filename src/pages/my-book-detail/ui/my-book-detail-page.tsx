import React from "react";
import { getBook } from "@/entities/my-book/api";
import BookInfo from "./book-info";

interface Props {
  id: number;
}
export const MyBookDetailPage = async ({ id }: Props) => {
  const book = await getBook(id);

  return (
    <div className="container md:w-3/4 lg:w-1/2 mx-auto py-8 px-4 md:px-6 flex flex-col  gap-6">
      <BookInfo book={book} />
      <hr />
      {/* <ReviewForm
        bookId={selectedBook?.id}
        handleAverageRating={handleAverageRating}
      />       */}
    </div>
  );
};
