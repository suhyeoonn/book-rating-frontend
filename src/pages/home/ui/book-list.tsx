"use client";

import BookCard from "@/pages/explore/ui/book-card";
import { menus } from "@/widgets/layout-header";
import Link from "next/link";
import React from "react";
import { BookSectionList } from "../model/home.interface";

interface BookListProps {
  books: BookSectionList;
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <>
      {books?.slice(0, 4).map((book) => (
        <Link href={`${menus[0].href}/${book.isbn}`} key={book.isbn}>
          <BookCard book={book} />
        </Link>
      ))}
    </>
  );
};
