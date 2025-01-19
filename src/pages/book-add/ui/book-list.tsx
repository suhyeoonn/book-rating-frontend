import React from "react";
import Image from "next/image";
import ISBN from "isbn3";
import { Button } from "@/shared/ui/button";
import { getIsbn } from "@/shared/utils";
import { KakaoResponseBook } from "../model/kakao-interface";

interface BookListProps {
  data: KakaoResponseBook[];
  setSelectedBook: (book: KakaoResponseBook) => void;
}
const BookList = ({ data, setSelectedBook }: BookListProps) => {
  return (
    <ul className="mt-5 flex flex-col">
      {data.map((d) => (
        <li
          key={d.isbn}
          className="flex cursor-pointer items-center gap-5 border-b border-b-gray-100 bg-white p-5 hover:bg-gray-100"
          onClick={() => setSelectedBook(d)}
        >
          <Image src={d.thumbnail} alt={d.title} width={100} height={100} />
          <div className="flex-1 text-sm">
            <div className="font-semibold text-gray-900">{d.title}</div>
            <div className="mt-5 space-y-1 text-xs text-gray-500">
              <div>
                <span className="mr-1 font-semibold">저자</span>
                <span>{d.authors.join(", ")}</span>
              </div>
              <div>
                <span className="mr-1 font-semibold">출판사</span>
                <span>{d.publisher}</span>
              </div>
              <div>
                <span className="mr-1 font-semibold">ISBN</span>
                <span>
                  {ISBN.hyphenate(getIsbn(d.isbn)) || getIsbn(d.isbn)}
                </span>
              </div>
            </div>
          </div>
          <Button className="text-xs">추가</Button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
