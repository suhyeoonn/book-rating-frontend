import dayjs from "dayjs";
import { Book } from "@/entities/aladin";

const BookDetailItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="grid grid-cols-12">
    <dt className="col-span-12 pr-1 font-semibold sm:col-span-2">{label}</dt>
    <dd className="col-span-12 sm:col-span-10">{value}</dd>
  </div>
);

export function BookInfo({ selectedBook: book }: { selectedBook: Book }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 lg:text-3xl">
        {book.title}
      </h2>

      <dl className="grid grid-cols-1 gap-2 text-sm">
        <BookDetailItem label="저자" value={book.author} />
        <BookDetailItem
          label="출판"
          value={`${book.publisher} | ${dayjs(book.pubDate).format("YYYY-MM-DD")}`}
        />
        <BookDetailItem label="ISBN" value={book.isbn13} />

        {book.subInfo?.itemPage && (
          <BookDetailItem label="페이지 수" value={book.subInfo.itemPage} />
        )}
      </dl>

      <p className="text-sm text-slate-600">{book.description}</p>

      <a
        target="_blank"
        href={book.link}
        className="text-sm underline hover:text-slate-900"
      >
        알라딘 바로가기
      </a>
    </div>
  );
}
