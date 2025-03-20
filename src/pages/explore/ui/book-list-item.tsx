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
      className="relative grid min-h-32 cursor-pointer grid-cols-12 items-center gap-5 rounded-sm border bg-white hover:bg-gray-100"
    >
      <Link href={`${menus[0].href}/${d.isbn}`} className="contents">
        <Image
          src={d.thumbnail}
          alt={d.title}
          width={140}
          height={128}
          className="col-span-3 shadow-2xl"
        />
        <div className="col-span-7 flex-1 text-sm">
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
      <div className="absolute right-5 col-span-2 inline-block w-32">
        <AddMyListButton book={d} />
      </div>
    </li>
  );
};
