import { Book } from "@/entities/book/types";
import Link from "next/link";
import dayjs from "dayjs";

export default function BookInfo({ selectedBook }: { selectedBook: Book }) {
  return (
    <>
      <h2 className="mt-4 text-2xl font-bold text-slate-900 lg:text-3xl">
        {selectedBook.title}
      </h2>
      <dl className="mt-2 grid grid-cols-1 gap-2 text-sm">
        <div className="grid grid-cols-12">
          <dt className="pr-1 font-semibold">저자</dt>
          <dd className="col-span-11">{selectedBook.authors}</dd>
        </div>
        <div className="grid grid-cols-12">
          <dt className="pr-1 font-semibold">출판</dt>
          <dd className="col-span-11">
            {selectedBook.publisher} |{" "}
            {dayjs(selectedBook.datetime).format("YYYY-MM-DD")}
          </dd>
        </div>
      </dl>
      <p className="mt-6 text-sm text-slate-600">
        {selectedBook.contents + "..."}
        {selectedBook.url && (
          <Link
            target="_blank"
            href={selectedBook.url}
            className="text-sm underline hover:text-slate-900"
          >
            자세히
          </Link>
        )}
      </p>
    </>
  );
}
