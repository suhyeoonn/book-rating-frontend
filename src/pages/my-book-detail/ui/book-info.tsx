import Image from "next/image";
import TagGroup from "../../../components/tag-group";
import { formatDateTime, validateSrc } from "@/shared/utils";
import dayjs from "dayjs";
import { MyBook } from "@/entities/my-book/types";
import BookContent from "./book-content";
import { ReactNode } from "react";
import { StatusSelect } from "@/features/my-books/update-status";
import { RatingSelect } from "@/features/my-books/update-rating";

export default function BookInfo({ book: myBook }: { book: MyBook }) {
  const { id, book, rating, status, createdAt, updatedAt, finishedAt } = myBook;
  return (
    <div className="flex gap-16 justify-center text-slate-500">
      <div className="flex flex-col">
        <Image
          src={validateSrc(book.thumbnail)}
          alt={book.title}
          width={150}
          height={150}
          className="p-1 max-h-52 object-contain shadow-sm"
        />
        <div className="mt-8 flex items-center">
          <RatingSelect id={id} value={rating} />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between"></div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
          {book.title}
        </h1>
        <div className="text-sm mt-2 grid grid-cols-2 gap-4 sm:grid-cols-1">
          <DetailItem label="저자">{book.authors}</DetailItem>
          <DetailItem label="출판">
            {book.publisher} | {dayjs(book.datetime).format("YYYY-MM-DD")}
          </DetailItem>
          <BookContent book={book} />
          <div className="flex gap-1 items-center">
            <span className="font-semibold pr-1">상태</span>
            <StatusSelect id={id} value={status} />
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
      <span className="font-semibold pr-3">{label}</span>
      {children}
    </p>
  );
};
