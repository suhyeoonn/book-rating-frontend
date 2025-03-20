"use client";

import { bookApi } from "@/entities/book";
import BookCard from "@/pages/explore/ui/book-card";
import { menus } from "@/widgets/layout-header";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export const BookList = () => {
  const { data: books } = useQuery(bookApi.bookQueries.list(""));

  return (
    <>
      {books?.slice(0, 4).map((book, index) => (
        <Link href={`${menus[0].href}/${book.id}`} key={index}>
          <BookCard book={book} />
        </Link>
      ))}
    </>
  );
};
