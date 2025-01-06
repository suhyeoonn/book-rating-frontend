"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import BookCard from "./book-card";
import { menus } from "@/widgets/layout-header";
import { bookApi } from "@/entities/book";

interface BookListProps {
  keyword: string;
}

export default function BookList({ keyword }: BookListProps) {
  const { data: books, isFetching } = useQuery(
    bookApi.bookQueries.list(keyword),
  );

  if (!isFetching && keyword && !books?.length) {
    return (
      <div className="mt-5 text-sm italic text-gray-500">
        검색 결과가 없습니다.
      </div>
    );
  }
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
