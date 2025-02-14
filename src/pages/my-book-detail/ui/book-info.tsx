"use client";

import Image from "next/image";
import TagGroup from "../../../shared/ui/tag-group";
import { formatDateTime, validateSrc } from "@/shared/utils";
import dayjs from "dayjs";
import { MyBook } from "@/entities/my-book/types";
import { ReactNode } from "react";
import { StatusSelect } from "@/features/my-books/update-status";
import React from "react";
import { ReviewComment } from "@/features/review/update-comment";
import { useQuery } from "@tanstack/react-query";
import { reviewApi } from "@/entities/review";
import Link from "next/link";
import { menus } from "@/widgets/layout-header";
import { RatingSelect, useSetRating } from "@/features/review/set-rating";

export default function BookInfo({ book: myBook }: { book: MyBook }) {
  const { id, book, status, createdAt, updatedAt, finishedAt } = myBook;

  const { data: review } = useQuery(reviewApi.reviewQueries.get(id));
  const { changeRating } = useSetRating({ review, myBookId: id });

  return (
    <article className="flex justify-center gap-16 text-slate-500">
      <div className="flex flex-col">
        <Image
          src={validateSrc(book.thumbnail)}
          alt={book.title}
          width={150}
          height={150}
          className="max-h-52 border border-gray-100 object-contain p-1 shadow-lg"
        />
        <div className="mt-8 flex items-center">
          <RatingSelect
            rating={review?.rating || 0}
            changeCallback={changeRating}
          />
          {/* TODO: 제거 */}
          {/*<RatingWithReviewModal open={open} setOpen={setOpen} id={id} /> */}
        </div>
      </div>

      <section className="flex-1">
        <h2 className="text-2xl font-bold text-slate-900 underline-offset-4 hover:underline lg:text-3xl">
          <Link href={`${menus[0].href}/${book.id}`}>{book.title}</Link>
        </h2>
        <dl className="mt-4 grid grid-cols-1 gap-4 text-sm">
          <DetailItem label="상태">
            <StatusSelect id={id} value={status} />
          </DetailItem>
          <DetailItem label="저자">{book.authors}</DetailItem>
          <DetailItem label="출판">
            {book.publisher} | {dayjs(book.datetime).format("YYYY-MM-DD")}
          </DetailItem>
          <DetailItem label="추가일">{formatDateTime(createdAt)}</DetailItem>
          <DetailItem label="마지막 수정일">
            {formatDateTime(updatedAt)}
          </DetailItem>
          <DetailItem label="완료일">
            {formatDateTime(finishedAt) || "-"}
          </DetailItem>
          <DetailItem label="한줄평">
            <ReviewComment review={review} />
          </DetailItem>
        </dl>

        {/* <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
          <TagGroup tags={myBook.tags} />
        </div> */}
      </section>
    </article>
  );
}

interface DetailItemProps {
  label: string;
  children: ReactNode;
}
const DetailItem = ({ label, children }: DetailItemProps) => {
  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-9">
      <dt className="col-span-2 font-semibold">{label}</dt>
      <dd className="col-span-7">{children}</dd>
    </div>
  );
};
