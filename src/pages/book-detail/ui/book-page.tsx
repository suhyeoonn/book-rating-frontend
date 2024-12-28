"use client";

import React from "react";
import { useState } from "react";
import BookInfo from "@/pages/book-detail/ui/book-info";
import ReviewList from "@/pages/book-detail/ui/review-list";
import { menus } from "@/widgets/layout-header/model/menu";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { Book } from "@/entities/book/types";

export const BookDetailPage = ({ book }: { book: Book }) => {
  const [averageRating, setAverageRating] = useState(book?.averageRating || 0);

  return (
    <div className="container md:w-3/4 lg:w-1/2 mx-auto py-8 px-4 md:px-6 flex flex-col  gap-6">
      <Breadcrumb links={[menus[0]]} pathName={book.title} />
      <BookInfo selectedBook={book} averageRating={averageRating} />
      <ReviewList selectedBook={book} setAverageRating={setAverageRating} />
    </div>
  );
};
