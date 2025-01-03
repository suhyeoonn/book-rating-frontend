import React from "react";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import BookList from "@/pages/search/ui/book-list";
import { Button } from "@/shared/ui/button";

export function SearchPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-6 flex items-center justify-start">
          {/* TODO: */}
          {/* <SearchInput /> */}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <BookList />
        </div>
      </div>
    </>
  );
}
