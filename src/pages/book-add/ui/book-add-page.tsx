"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@/shared/ui/button";
import DebounceInput from "@/components/ui/debounce-input";
import { AlertDialog } from "@/shared/ui/alert-dialog";
import BookAlertDescription from "@/components/book/book-alert-description";
import { useAddBook } from "@/shared/hooks/use-add-book";
import ISBN from "isbn3";
import { getIsbn } from "@/shared/utils";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/shared/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Book } from "@/shared/types";

export const BookAddPage = () => {
  const router = useRouter();
  const { onSubmit, handleChange, data, selectedBook, setSelectedBook } =
    useAddBook({
      onSuccess: (book: Book) => {
        const id = 1;
        toast({
          description: "책이 추가되었습니다.",
          action: (
            <ToastAction altText="Try again" asChild>
              <Button onClick={() => router.push(`/books/${book.id}`)}>
                보러 가기
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
      <DebounceInput changeCallback={handleChange} />
      <ul className="mt-5 flex flex-col gap-2">
        {data &&
          data.map((d) => (
            <li
              key={d.isbn}
              className="rounded-lg flex items-center gap-5 p-5 bg-white border-b cursor-pointer hover:bg-gray-100 shadow-sm"
            >
              <Image src={d.thumbnail} alt={d.title} width={100} height={100} />
              <div className="flex-1">
                <Row label="title" value={d.title} />
                <Row label="Authors" value={d.authors.join(", ")} />
                <Row label="publisher" value={d.publisher} />
                <Row
                  label="isbn"
                  value={ISBN.hyphenate(getIsbn(d.isbn)) || getIsbn(d.isbn)}
                />
              </div>
              <Button onClick={() => setSelectedBook(d)}>Add</Button>
            </li>
          ))}
      </ul>
      <AlertDialog
        open={!!selectedBook}
        handleOpen={() => setSelectedBook(null)}
        handleAction={onSubmit}
        title="책을 추가하시겠습니까?"
        description={
          <BookAlertDescription
            title={selectedBook?.title || ""}
            action="add"
          />
        }
      />
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => {
  return (
    <div>
      <span className="capitalize font-bold text-gray-500">{label}</span>:{" "}
      {value}
    </div>
  );
};
