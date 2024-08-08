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
import { books } from "@/lib/dummy-data";
import { Book } from "@/lib/types";
import SearchInput from "@/components/search-input";
import BookCard from "@/components/book-card";
import BookModal from "@/components/book-modal";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
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
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-center h-full">
              <Button
                size="lg"
                variant="ghost"
                className="transition duration-150 text-gray-700 hover:bg-primary/10 hover:text-lg hover:text-gray-800"
              >
                <PlusIcon className="w-6 h-6" />
                <span>Add Book</span>
              </Button>
            </div>
          </div>
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
