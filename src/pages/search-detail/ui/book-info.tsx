import { Book } from "@/entities/book/types";
import Image from "next/image";
import TagGroup from "../../../shared/ui/tag-group";
import StarGroup from "../../../shared/ui/star-group";
import { validateSrc } from "@/shared/utils";
import Link from "next/link";
import dayjs from "dayjs";
import { AddMyListButton } from "@/features/my-books/add-my-list";

export default function BookInfo({
  selectedBook,
  averageRating,
}: {
  selectedBook: Book;
  averageRating: number;
}) {
  return (
    <div className="flex justify-center gap-16 text-slate-500">
      <div className="flex flex-col items-center">
        <Image
          src={validateSrc(selectedBook.thumbnail)}
          alt={selectedBook.title}
          width={150}
          height={150}
          className="max-h-52 object-contain p-1"
        />
        <div className="flex flex-grow items-center">
          <AddMyListButton
            book={{
              ...selectedBook,
              tags: [],
            }}
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <StarGroup rating={averageRating} />
        </div>
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
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
          <TagGroup tags={selectedBook.tags} />
        </div>
      </div>
    </div>
  );
}
