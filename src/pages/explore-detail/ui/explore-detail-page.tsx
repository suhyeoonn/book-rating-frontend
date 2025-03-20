"use client";

import React from "react";
import BookInfo from "@/pages/explore-detail/ui/book-info";
import ReviewList from "@/pages/explore-detail/ui/review-list";
import { menus } from "@/widgets/layout-header/model/menu";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import Image from "next/image";
import { validateSrc } from "@/shared/utils";
import { AddMyListButton } from "@/features/my-books/add-my-list";
import StarGroup from "@/shared/ui/star-group";
import TagGroup from "@/shared/ui/tag-group";
import { Book } from "@/entities/aladin";
import { ReviewResponse } from "../model/review-interface";
import { useQuery } from "@tanstack/react-query";
import { reviewApi } from "@/entities/review";
import { Skeleton } from "@/shared/ui/skeleton";

export const ExploreDetailPage = ({ book }: { book: Book }) => {
  const { isFetching, data } = useQuery<ReviewResponse>({
    queryKey: ["reviews", book.isbn13],
    queryFn: () => reviewApi.fetchReviews(book.isbn13),
  });

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-4 md:px-6 md:py-8 lg:w-3/4 2xl:w-1/2">
      <Breadcrumb links={[menus[0]]} pathName={book.title} />
      <article className="grid grid-cols-1 justify-center gap-16 text-slate-500 md:grid-cols-4">
        <section className="col-span-1 flex flex-col items-center">
          <Image
            src={validateSrc(book.cover)}
            alt={book.title}
            width={150}
            height={150}
            className="max-h-52 border border-gray-100 object-contain p-1 shadow-lg"
          />
          <div className="mt-4 flex flex-grow items-center">
            <AddMyListButton book={book} />
          </div>
        </section>
        <section className="flex-1 md:col-span-3">
          <div className="flex justify-between">
            {typeof data?.averageRating === "number" ? (
              <div className="flex items-center gap-1">
                <StarGroup rating={data?.averageRating ?? 0} />
                <span className="text-xs font-bold">{data.averageRating}</span>
              </div>
            ) : (
              <Skeleton className="h-5 w-32" />
            )}
          </div>
          <BookInfo selectedBook={book} />
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {/* <TagGroup tags={book.tags} /> */}
          </div>
        </section>
      </article>
      <div className="flex flex-col border-t py-4">
        <h3 className="mb-4 text-base font-medium text-slate-800 md:text-lg">
          Reviews
        </h3>
        <ReviewList isFetching={isFetching} data={data?.reviews} />
      </div>
    </div>
  );
};
