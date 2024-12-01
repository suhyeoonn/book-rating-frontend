"use client";

import React from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BookInfo from "@/pages/book-detail/ui/book-info";
import { notFound } from "next/navigation";
import { fetchBook } from "@/shared/api/book";
import ReviewList from "@/pages/book-detail/ui/review-list";
import { AxiosError } from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";

export const BookDetailPage = ({ id }: { id: string }) => {
  const {
    data: selectedBook,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["book", id],
    queryFn: () => fetchBook(+id),
    retry: (_, error) => {
      const axiosError = error as AxiosError;

      // 네트워크 오류일 때만 재시도
      if (axiosError?.response?.status === 500) return true;
      return false;
    },
  });

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
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">책 탐색</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{selectedBook.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <BookInfo selectedBook={selectedBook} averageRating={averageRating} />
      <ReviewList
        selectedBook={selectedBook}
        setAverageRating={setAverageRating}
      />
    </div>
  );
};
