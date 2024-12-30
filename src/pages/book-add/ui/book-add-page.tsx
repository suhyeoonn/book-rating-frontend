"use client";

import React from "react";
import { Button } from "@/shared/ui/button";
import DebounceInput from "@/components/ui/debounce-input";
import { AlertDialog } from "@/shared/ui/alert-dialog";
import { useAddBook } from "@/pages/book-add/api/use-add-book";
import { ToastAction } from "@/shared/ui/toast";
import { toast } from "@/shared/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Book } from "@/entities/book/types";
import { useSearchBook } from "../api/use-search-book";
import BookList from "./book-list";

export const BookAddPage = () => {
  const router = useRouter();

  const { handleSearchBook, data } = useSearchBook();

  const { onSubmit, selectedBook, setSelectedBook } = useAddBook({
    onSuccess: (book: Book) => {
      toast({
        description: "책이 추가되었습니다.",
        action: (
          <ToastAction altText="Try again" asChild>
            <Button onClick={() => router.push(`/my-books/${book.id}`)}>
              바로 가기
            </Button>
          </ToastAction>
        ),
      });
    },
    onError: (err: Error) => {
      toast({
        description: err.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="w-full md:w-3/4 lg:w-1/2">
      <DebounceInput
        changeCallback={handleSearchBook}
        placeholder="제목, ISBN, 출판사, 저자를 검색해 보세요"
      />

      {data?.length ? (
        <BookList data={data} setSelectedBook={setSelectedBook} />
      ) : (
        <div className="mt-5 text-center text-sm italic text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}

      <AlertDialog
        open={!!selectedBook}
        handleOpen={() => setSelectedBook(null)}
        handleAction={onSubmit}
        title="책을 추가하시겠습니까?"
        description={
          <>
            <span className="pr-1 font-bold">{selectedBook?.title}</span>
            이(가) 추가됩니다.
          </>
        }
      />
    </div>
  );
};
