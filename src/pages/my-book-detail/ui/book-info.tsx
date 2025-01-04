"use client";

import Image from "next/image";
import TagGroup from "../../../shared/ui/tag-group";
import { formatDateTime, validateSrc } from "@/shared/utils";
import dayjs from "dayjs";
import { MyBook } from "@/entities/my-book/types";
import BookContent from "./book-content";
import { ReactNode } from "react";
import { StatusSelect } from "@/features/my-books/update-status";
import { UpdateRating } from "@/features/review/update-rating";
import { RatingWithReviewModal } from "@/features/review/add-review";
import { Select, SelectTrigger } from "@/shared/ui/select";
import StarGroup from "@/shared/ui/star-group";
import React from "react";
import { ReviewComment } from "@/features/review/update-review";

export default function BookInfo({ book: myBook }: { book: MyBook }) {
  const { id, book, status, review, createdAt, updatedAt, finishedAt } = myBook;

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex justify-center gap-16 text-slate-500">
      <div className="flex flex-col">
        <Image
          src={validateSrc(book.thumbnail)}
          alt={book.title}
          width={150}
          height={150}
          className="max-h-52 object-contain p-1 shadow-sm"
        />
        <div className="mt-8 flex items-center">
          {!review?.rating ? (
            <Select open={open} onOpenChange={() => setOpen(true)}>
              <SelectTrigger>
                <StarGroup rating={0} />
              </SelectTrigger>
            </Select>
          ) : (
            <UpdateRating rating={review.rating} reviewId={review.id} />
          )}
          <RatingWithReviewModal
            open={open}
            setOpen={setOpen}
            bookId={book.id}
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between"></div>
        <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">
          {book.title}
        </h1>
        <div className="mt-2 grid grid-cols-2 gap-4 text-sm sm:grid-cols-1">
          <DetailItem label="저자">{book.authors}</DetailItem>
          <DetailItem label="출판">
            {book.publisher} | {dayjs(book.datetime).format("YYYY-MM-DD")}
          </DetailItem>
          <BookContent book={book} />
          <div className="flex items-center gap-1">
            <span className="pr-1 font-semibold">상태</span>
            <StatusSelect id={id} value={status} />
          </div>
          <div className="flex items-center gap-1">
            <span className="pr-1 font-semibold">한줄평</span>
            <ReviewComment review={review} />
          </div>
          <DetailItem label="추가일">{formatDateTime(createdAt)}</DetailItem>
          <DetailItem label="마지막 수정일">
            {formatDateTime(updatedAt)}
          </DetailItem>
          <DetailItem label="완료일">
            {formatDateTime(finishedAt) || "-"}
          </DetailItem>
        </div>

        {/* <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
          <TagGroup tags={myBook.tags} />
        </div> */}
      </div>
    </div>
  );
}

interface DetailItemProps {
  label: string;
  children: ReactNode;
}
const DetailItem = ({ label, children }: DetailItemProps) => {
  return (
    <p>
      <span className="pr-3 font-semibold">{label}</span>
      {children}
    </p>
  );
};
