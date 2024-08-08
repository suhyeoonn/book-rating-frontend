/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6xrMay5lJtg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Caudex } from 'next/font/google'
import { Prata } from 'next/font/google'

caudex({
  subsets: ['latin'],
  display: 'swap',
})

prata({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SearchInput from "./search-input";
import { books } from "@/lib/dummy-data";
import BookCard from "./book-card";
import BookModal from "./book-modal";
import { Book } from "@/lib/types";

export function ListComponent() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  return (
    <div className="bg-gradient-to-br from-primary to-secondary min-h-screen">
      <header className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="text-2xl font-bold">Book Rating</div>
        <div>
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <SearchInput />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              setSelectedBook={setSelectedBook}
            />
          ))}
        </div>
        {selectedBook && (
          <BookModal
            selectedBook={selectedBook}
            setSelectedBook={setSelectedBook}
          />
        )}
      </div>
    </div>
  );
}
