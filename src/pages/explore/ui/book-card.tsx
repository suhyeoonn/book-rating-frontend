"use client";

import Image from "next/image";
import StarGroup from "@/shared/ui/star-group";

import { validateSrc } from "@/shared/utils";
import { BookSectionItem } from "@/pages/home/model/home.interface";

export default function BookCard({ book }: { book: BookSectionItem }) {
  return (
    <>
      <div className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border-gray-200 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <Image
          src={validateSrc(book?.thumbnail || book?.cover || "")}
          alt={book.title}
          width={150}
          height={150}
          className="max-h-52 w-full bg-gradient-to-b from-gray-50 to-gray-100 object-contain p-1 py-2"
        />
        <div className="flex-1 space-y-1 bg-white p-3">
          <h3 className="mb-2 truncate text-sm font-normal text-slate-900">
            {book.title}
          </h3>
          {/* <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <TagGroup tags={book.tags} />
          </div> */}
          <div className="flex items-center justify-between">
            <StarGroup rating={book.averageRating} />
            <span className="text-xs text-gray-500">
              {book.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
