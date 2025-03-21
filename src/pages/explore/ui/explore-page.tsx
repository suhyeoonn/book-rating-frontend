import React from "react";
import BookList from "@/pages/explore/ui/book-list";
import { BookFilterBar } from "./book-filter-bar";

export function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:w-3/4 xl:w-3/5 2xl:w-1/2">
      <BookFilterBar />
      <BookList />
    </div>
  );
}
