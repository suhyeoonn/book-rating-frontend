import { Book } from "@/entities/book/types";
import Link from "next/link";
import dayjs from "dayjs";

export default function BookInfo({ selectedBook }: { selectedBook: Book }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
        {selectedBook.title}
      </h2>
      <dl className="grid grid-cols-1 gap-2 text-sm">
        <div className="grid grid-cols-12">
          <dt className="col-span-2 pr-1 font-semibold md:col-span-1">저자</dt>
          <dd className="col-span-10 md:col-span-11">{selectedBook.authors}</dd>
        </div>
        <div className="grid grid-cols-12">
          <dt className="col-span-2 pr-1 font-semibold md:col-span-1">출판</dt>
          <dd className="col-span-10 md:col-span-11">
            {selectedBook.publisher} |{" "}
            {dayjs(selectedBook.datetime).format("YYYY-MM-DD")}
          </dd>
        </div>
      </dl>
      <p className="text-sm text-slate-600">
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
    </div>
  );
}
