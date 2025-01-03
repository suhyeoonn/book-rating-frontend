"use client";

import React from "react";
import { useState } from "react";
import BookInfo from "@/pages/search-detail/ui/book-info";
import ReviewList from "@/pages/search-detail/ui/review-list";
import { menus } from "@/widgets/layout-header/model/menu";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { Book } from "@/entities/book/types";

export const SearchDetailPage = ({ book }: { book: Book }) => {
  const [averageRating, setAverageRating] = useState(book?.averageRating || 0);

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:w-3/4 md:px-6 lg:w-1/2">
      <Breadcrumb links={[menus[0]]} pathName={book.title} />
      <BookInfo selectedBook={book} averageRating={averageRating} />
      <ReviewList selectedBook={book} setAverageRating={setAverageRating} />
    </div>
  );
};
