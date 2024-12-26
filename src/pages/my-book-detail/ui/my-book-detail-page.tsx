import React from "react";
import { getBook } from "@/entities/my-book/api";
import BookInfo from "./book-info";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { menus } from "@/widgets/layout-header";
import { TiptapEditor } from "@/features/my-books/write-review";
import { RemoveButton } from "@/features/my-books/remove-book";

interface Props {
  id: number;
}
export const MyBookDetailPage = async ({ id }: Props) => {
  const myBook = await getBook(id);
  const { review } = myBook;
  return (
    <div className="container md:w-3/4 lg:w-1/2 mx-auto py-8 px-4 md:px-6 flex flex-col  gap-6">
      <div className="flex justify-between">
        <Breadcrumb links={[menus[1]]} pathName={myBook.book.title} />
        <RemoveButton id={id} />
      </div>
      <BookInfo book={myBook} />
      <hr />
      <TiptapEditor id={id} review={review} />
    </div>
  );
};
