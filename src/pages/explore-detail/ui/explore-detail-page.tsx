"use client";

import React from "react";
import { menus } from "@/widgets/layout-header/model/menu";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { Book } from "@/entities/aladin";
import { BookDetail } from "./book-detail";
import { BookReviews } from "./book-reviews";

export const ExploreDetailPage = ({ book }: { book: Book }) => {
  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-4 md:px-6 md:py-8 lg:w-3/4 2xl:w-1/2">
      <Breadcrumb links={[menus[0]]} pathName={book.title} />
      <BookDetail book={book} />
      <BookReviews book={book} />
    </div>
  );
};
