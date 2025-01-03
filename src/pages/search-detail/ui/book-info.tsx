import { Book } from "@/entities/book/types";
import Link from "next/link";
import dayjs from "dayjs";

export default function BookInfo({ selectedBook }: { selectedBook: Book }) {
  return (
    <>
      <h1 className="mt-4 text-2xl font-bold text-slate-900 lg:text-3xl">
        {selectedBook.title}
      </h1>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm sm:grid-cols-1">
        <p>
          <span className="pr-1 font-semibold">저자</span>
          {selectedBook.authors}
        </p>
        <p>
          <span className="pr-1 font-semibold">출판</span>
          {selectedBook.publisher} |{" "}
          {dayjs(selectedBook.datetime).format("YYYY-MM-DD")}
        </p>
      </div>
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
