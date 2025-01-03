"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import BookCard from "./book-card";
import { fetchBooks } from "../api/book";
import { menus } from "@/widgets/layout-header";

export default function BookList() {
  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  return (
    <>
      {books?.map((book, index) => (
        <Link href={`${menus[0].href}/${book.id}`} key={index}>
          <BookCard book={book} />
        </Link>
      ))}
    </>
  );
}
