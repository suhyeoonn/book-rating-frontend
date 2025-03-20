"use client";

import Link from "next/link";
import BookCard from "./book-card";
import { menus } from "@/widgets/layout-header";
import { useBookFilter } from "@/features/explore/book-filter/model/useBookFilter";

export default function BookList() {
  const { books, isFetching } = useBookFilter();

  if (isFetching) {
    return (
      <div className="mt-5 text-sm italic text-gray-500">
        📚 책을 찾고 있어요…
      </div>
    );
  }

  if (!isFetching && !books?.length) {
    return (
      <div className="mt-5 text-sm italic text-gray-500">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books?.map((book, index) => (
        <Link href={`${menus[0].href}/${book.isbn}`} key={index}>
          <BookCard book={book} />
        </Link>
      ))}
    </div>
  );
}
