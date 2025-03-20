"use client";

import { bookQueries } from "@/entities/aladin";
import BookCard from "@/pages/explore/ui/book-card";
import { menus } from "@/widgets/layout-header";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export const BookList = () => {
  const { data: books } = useQuery(bookQueries.newItems());

  return (
    <>
      {books?.slice(0, 4).map((book) => (
        <Link href={`${menus[0].href}/${book.isbn13}`} key={book.isbn13}>
          <BookCard book={book} />
        </Link>
      ))}
    </>
  );
};
