"use client";

import { formatDateTime } from "@/shared/utils";
import dayjs from "dayjs";
import { MyBook } from "@/entities/my-book/types";
import { ReactNode, useState } from "react";
import { StatusSelect } from "@/features/my-books/update-status";
import React from "react";
import Link from "next/link";
import { menus } from "@/widgets/layout-header";

export default function BookInfo({ book: myBook }: { book: MyBook }) {
  const { id, book, status, createdAt, updatedAt, finishedAt } = myBook;

  return (
    <section className="flex-1">
      <h2 className="text-2xl font-bold text-slate-900 underline-offset-4 hover:underline lg:text-3xl">
        <Link href={`${menus[0].href}/${book.isbn}`}>{book.title}</Link>
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
      </dl>

      {/* <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
      <TagGroup tags={myBook.tags} />
    </div> */}
    </section>
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
