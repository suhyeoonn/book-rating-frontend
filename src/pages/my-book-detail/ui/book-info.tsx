import Image from "next/image";
import TagGroup from "../../../components/tag-group";
import StarGroup from "../../../shared/ui/star-group";
import { validateSrc } from "@/shared/utils";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import dayjs from "dayjs";
import { useUser } from "@/shared/contexts/UserContext";
import Tooltip from "@/shared/ui/tooltip";
import { MyBook } from "@/entities/my-book/types";

import BookContent from "./book-content";

export default function BookInfo({ book: myBook }: { book: MyBook }) {
  const { book, rating } = myBook;
  return (
    <div className="flex gap-16 justify-center text-slate-500">
      <div className="flex flex-col">
        <Image
          src={validateSrc(book.thumbnail)}
          alt={book.title}
          width={150}
          height={150}
          className="p-1 max-h-52 object-contain"
        />
        <div className="flex items-center">
          <StarGroup rating={rating} />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between"></div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
          {book.title}
        </h1>
        <div className="text-sm mt-2 grid grid-cols-2 gap-2 sm:grid-cols-1">
          <p>
            <span className="font-semibold pr-1">저자</span>
            {book.authors}
          </p>
          <p>
            <span className="font-semibold pr-1">출판</span>
            {book.publisher} | {dayjs(book.datetime).format("YYYY-MM-DD")}
          </p>
          <BookContent book={book} />
          <div>
            <span className="font-semibold pr-1">상태</span>
            ready
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
          <TagGroup tags={myBook.tags} />
        </div> */}
      </div>
    </div>
  );
}
