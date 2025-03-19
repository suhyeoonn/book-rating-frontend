"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import BookCard from "./book-card";
import { menus } from "@/widgets/layout-header";
import { bookQueries } from "@/entities/aladin";
import { useExploreStore } from "../model/explore.store";

export default function BookList() {
  const { category, keyword } = useExploreStore((state) => state);

  const { data: books, isFetching } = useQuery(
    bookQueries.list(category, keyword),
  );

  if (!isFetching && keyword && !books?.length) {
    return (
      <div className="mt-5 text-sm italic text-gray-500">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {books?.map((book, index) => (
        <Link href={`${menus[0].href}/${book.isbn13}`} key={index}>
          <BookCard book={book} />
        </Link>
      ))}
    </div>
  );
}
