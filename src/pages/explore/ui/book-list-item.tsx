import { Book } from "@/entities/book/types";
import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { menus } from "@/widgets/layout-header";
import { AddMyListButton } from "@/features/my-books/add-my-list";

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book: d }: BookListItemProps) => {
  return (
    <li
      key={d.isbn}
      className="rounded-xs flex min-h-32 cursor-pointer flex-col items-center gap-6 border-b bg-white px-5 py-10 hover:bg-gray-100 sm:flex-row"
    >
      <Link href={`${menus[0].href}/${d.isbn}`} className="contents">
        <Image
          src={d.thumbnail}
          alt={d.title}
          width={140}
          height={128}
          className="rounded-xs col-span-3 shadow-2xl"
        />
        <div className="flex-1 text-sm">
          <div className="font-semibold text-gray-900">{d.title}</div>
          <div className="mt-5 space-y-1 text-xs text-gray-500">
            <div>
              <span className="mr-1 font-semibold">저자</span>
              <span>{d.authors}</span>
            </div>
            <div>
              <span className="mr-1 font-semibold">출판사</span>
              <span>{d.publisher}</span>
            </div>
            <div>
              <span className="mr-1 font-semibold">출판일</span>
              <span>{d.datetime}</span>
            </div>
            <div>
              <span className="mr-1 font-semibold">ISBN</span>
              <span>{d.isbn}</span>
            </div>
          </div>
        </div>
      </Link>
      <AddMyListButton book={d} />
    </li>
  );
};
