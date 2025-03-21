"use client";

import { useBookFilter } from "@/features/explore/book-filter/model/useBookFilter";
import { BookListItem } from "./book-list-item";

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
    <ul className="mt-5">
      {books?.map((book) => <BookListItem book={book} key={book.isbn} />)}
    </ul>
  );
}
