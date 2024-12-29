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
          className="flex items-center gap-5 p-5 bg-white border-b border-b-gray-100 cursor-pointer hover:bg-gray-100"
          onClick={() => setSelectedBook(d)}
        >
          <Image src={d.thumbnail} alt={d.title} width={100} height={100} />
          <div className="flex-1 text-sm">
            <div className="font-semibold text-gray-900">{d.title}</div>
            <div className="mt-5 text-gray-500 space-y-1 text-xs">
              <div>
                <span className="font-semibold mr-1">저자</span>
                <span>{d.authors.join(", ")}</span>
              </div>
              <div>
                <span className="font-semibold mr-1">출판사</span>
                <span>{d.publisher}</span>
              </div>
              <div>
                <span className="font-semibold mr-1">ISBN</span>
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
