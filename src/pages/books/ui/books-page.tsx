import React from "react";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import BookList from "@/pages/books/ui/book-list";
import { Button } from "@/shared/ui/button";

export function BooksPage() {
  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex items-center justify-start mb-6">
          {/* TODO: */}
          {/* <SearchInput /> */}
          <Button
            asChild
            variant="default"
            className="transition-transform duration-300 border shadow-md bg-primary rounded-sm font-semibold"
          >
            <Link href="/books/add">
              <PlusIcon className="w-5 h-5" />
              Add Book
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <BookList />
        </div>
      </div>
    </>
  );
}
