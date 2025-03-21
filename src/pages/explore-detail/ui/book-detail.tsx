import React from "react";
import Image from "next/image";
import { validateSrc } from "@/shared/utils";
import { AddMyListButton } from "@/features/my-books/add-my-list";
import { Book } from "@/entities/aladin";
import { BookInfo } from "./book-info";
import { BookRating } from "./book-rating";
import { convertToBookType } from "@/entities/aladin/lib/convertToBookType";

export const BookDetail = ({ book }: { book: Book }) => {
  return (
    <article className="grid grid-cols-1 justify-center gap-16 text-slate-500 md:grid-cols-4">
      <section className="col-span-1 flex flex-col items-center">
        <Image
          src={validateSrc(book.cover)}
          alt={book.title}
          width={150}
          height={150}
          className="max-h-52 border border-gray-100 object-contain p-1 shadow-lg"
        />
        <div className="mt-4 flex flex-grow items-center">
          <AddMyListButton book={convertToBookType(book)} />
        </div>
      </section>
      <section className="flex-1 md:col-span-3">
        <BookRating isbn={book.isbn13} />
        <BookInfo selectedBook={book} />
      </section>
    </article>
  );
};
