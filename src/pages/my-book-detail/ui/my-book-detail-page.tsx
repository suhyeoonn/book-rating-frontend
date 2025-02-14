"use client";

import React, { useEffect, useState } from "react";
import BookInfo from "./book-info";
import { Breadcrumb } from "@/shared/ui/breadcrumb";
import { menus } from "@/widgets/layout-header";
import { MemoEditor } from "@/features/my-books/write-memo";
import { RemoveButton } from "@/features/my-books/remove-book";
import { useQuery } from "@tanstack/react-query";
import { myBookApi } from "@/entities/my-book";
import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/toggle-group";
import { ListIcon, MessageCircleMore, TextCursorInputIcon } from "lucide-react";
import { NoteList } from "./note-list";
import { useMyBookStore } from "@/entities/my-book/models/mybook.store";

interface Props {
  id: number;
}
export const MyBookDetailPage = ({ id }: Props) => {
  const { data: myBook, isFetching } = useQuery(
    myBookApi.bookQueries.detail(id),
  );

  const setBookId = useMyBookStore((state) => state.setBookId);

  useEffect(() => {
    if (!myBook) return;

    setBookId({ myBookId: id, bookId: myBook?.book.id });
  }, [myBook]);

  const [mode, setMode] = useState("single");

  if (!myBook || isFetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="container mx-auto flex flex-col gap-6 px-4 py-8 md:w-3/4 md:px-6 lg:w-1/2">
      <div className="flex justify-between">
        <Breadcrumb links={[menus[1]]} pathName={myBook.book.title} />
        <RemoveButton id={id} />
      </div>
      <BookInfo book={myBook} />
      <hr />
      <ToggleGroup
        type="single"
        className="justify-start"
        value={mode}
        onValueChange={setMode}
      >
        <ToggleGroupItem value="single" aria-label="Toggle Single Editor">
          <MessageCircleMore className="h-4 w-4" /> 후기
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="Toggle List">
          <ListIcon className="h-4 w-4" /> 노트
        </ToggleGroupItem>
      </ToggleGroup>
      {mode === "single" ? <MemoEditor id={id} /> : <NoteList />}
    </div>
  );
};
