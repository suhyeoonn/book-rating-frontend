"use client";

import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BookInfo from "@/pages/book-detail/ui/book-info";
import { notFound } from "next/navigation";
import ReviewList from "@/pages/book-detail/ui/review-list";
import { menus } from "@/widgets/layout-header/model/menu";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { bookApi } from "@/entities/book";

export const BookDetailPage = ({ id }: { id: string }) => {
  const {
    data: selectedBook,
    isFetching,
    isError,
  } = useQuery(bookApi.bookQueries.detail(+id));

  const [averageRating, setAverageRating] = useState(
    selectedBook?.averageRating || 0
  );

  const handleAverageRating = (rating: number | undefined) => {
    setAverageRating(rating || 0);
  };

  if (isFetching) {
    return <div>loading...</div>;
  }

  if (isError || !selectedBook) {
    return notFound();
  }

  return (
    <div className="container md:w-3/4 lg:w-1/2 mx-auto py-8 px-4 md:px-6 flex flex-col  gap-6">
      <Breadcrumb links={[menus[0]]} pathName={selectedBook.title} />
      <BookInfo selectedBook={selectedBook} averageRating={averageRating} />
      <ReviewList
        selectedBook={selectedBook}
        setAverageRating={setAverageRating}
      />
    </div>
  );
};
