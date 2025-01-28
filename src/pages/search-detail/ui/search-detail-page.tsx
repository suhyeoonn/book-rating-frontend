"use client";

import React from "react";
import BookInfo from "@/pages/search-detail/ui/book-info";
import ReviewList from "@/pages/search-detail/ui/review-list";
import { menus } from "@/widgets/layout-header/model/menu";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { Book } from "@/entities/book/types";
import Image from "next/image";
import { validateSrc } from "@/shared/utils";
import { AddMyListButton } from "@/features/my-books/add-my-list";
import StarGroup from "@/shared/ui/star-group";
import TagGroup from "@/shared/ui/tag-group";

export const SearchDetailPage = ({ book }: { book: Book }) => {
  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:w-3/4 md:px-6 lg:w-1/2">
      <Breadcrumb links={[menus[0]]} pathName={book.title} />
      <article className="flex justify-center gap-16 text-slate-500">
        <section className="flex flex-col items-center">
          <Image
            src={validateSrc(book.thumbnail)}
            alt={book.title}
            width={150}
            height={150}
            className="max-h-52 border border-gray-100 object-contain p-1 shadow-lg"
          />
          <div className="mt-4 flex flex-grow items-center">
            <AddMyListButton
              book={{
                ...book,
                tags: [],
              }}
            />
          </div>
        </section>
        <section className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <StarGroup rating={book.averageRating} />
              <span className="text-xs font-bold">({book.averageRating})</span>
            </div>
          </div>
          <BookInfo selectedBook={book} />
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
            <TagGroup tags={book.tags} />
          </div>
        </section>
      </article>
      <ReviewList selectedBook={book} />
    </div>
  );
};
