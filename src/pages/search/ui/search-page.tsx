"use client";

import React, { useState } from "react";
import BookList from "@/pages/search/ui/book-list";
import { SearchInput } from "@/features/book-search";

export function SearchPage() {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-6 flex items-center justify-start">
          <SearchInput setKeyword={setKeyword} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <BookList keyword={keyword} />
        </div>
      </div>
    </>
  );
}
