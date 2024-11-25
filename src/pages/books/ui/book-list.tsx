"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import BookCard from "./book-card";
import { fetchBooks } from "../api/book";

export default function BookList() {
  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  return (
    <>
      {books?.map((book, index) => (
        <Link href={`/books/${book.id}`} key={index}>
          <BookCard book={book} />
        </Link>
      ))}
    </>
  );
}
