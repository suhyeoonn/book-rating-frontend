"use client";

import BookCard from "@/pages/explore/ui/book-card";
import { menus } from "@/widgets/layout-header";
import Link from "next/link";
import React from "react";
import { BookSectionList } from "../model/home.interface";
import { SkeletonSectionItem } from "./skeleton-section-item";

interface BookListProps {
  books: BookSectionList;
}

export const BookList = ({ books }: BookListProps) => {
  if (!books) {
    return Array.from({ length: 4 }, (_, i) => <SkeletonSectionItem key={i} />);
  }

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
