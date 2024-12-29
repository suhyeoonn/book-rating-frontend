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
    <ul className="mt-5 flex flex-col gap-2">
      {data.map((d) => (
        <li
          key={d.isbn}
          className="rounded-lg flex items-center gap-5 p-5 bg-white border-b cursor-pointer hover:bg-gray-100 shadow-sm"
        >
          <Image src={d.thumbnail} alt={d.title} width={100} height={100} />
          <div className="flex-1">
            <Row label="title" value={d.title} />
            <Row label="Authors" value={d.authors.join(", ")} />
            <Row label="publisher" value={d.publisher} />
            <Row
              label="isbn"
              value={ISBN.hyphenate(getIsbn(d.isbn)) || getIsbn(d.isbn)}
            />
          </div>
          <Button onClick={() => setSelectedBook(d)}>Add</Button>
        </li>
      ))}
    </ul>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <span className="capitalize font-bold text-gray-500">{label}</span>:{" "}
      {value}
    </div>
  );
};
export default BookList;
