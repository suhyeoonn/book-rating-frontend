import React, { ReactNode } from "react";
import { BookList } from "./book-list";
import { BookSectionList } from "../model/home.interface";

interface BookSectionProps {
  title: ReactNode;
  data: BookSectionList;
}

export const BookSection = ({ title, data }: BookSectionProps) => {
  return (
    <section className="flex w-full justify-center py-8">
      <div className="container px-4 sm:px-0">
        <h2 className="mb-8 text-2xl font-bold">{title}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BookList books={data} />
        </div>
      </div>
    </section>
  );
};
