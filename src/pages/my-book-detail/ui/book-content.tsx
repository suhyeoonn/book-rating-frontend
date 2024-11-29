"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Book } from "@/entities/book/types";
import Link from "next/link";

interface Props {
  book: Book;
}
const BookContent = ({ book }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold pr-1">소개</span>
        <p className="truncate">{!isOpen && book.contents.slice(0, 50)}</p>
        <CollapsibleTrigger asChild className="px-1">
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {book.contents + "..."}
        {book.url && (
          <Link
            target="_blank"
            href={book.url}
            className="text-sm underline hover:text-slate-900"
          >
            자세히
          </Link>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default BookContent;
