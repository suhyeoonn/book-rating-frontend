"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { PlusIcon } from "@radix-ui/react-icons";
import BookList from "./book-list";

export const MyBookPage = () => {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="flex justify-end">
        <Button
          asChild
          variant="default"
          className="transition-transform duration-300 border shadow-sm bg-primary font-semibold ml-auto"
        >
          <Link href="/my-books/add">
            <PlusIcon className="w-5 h-5" />
            Add Book
          </Link>
        </Button>
      </div>
      <BookList />
    </div>
  );
};
