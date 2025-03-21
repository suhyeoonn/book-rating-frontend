"use client";

import React from "react";
import { Plus, BookmarkCheckIcon } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Tooltip from "@/shared/ui/tooltip";
import { ReadStatusSelect } from "./read-status-select";
import { ReadingStatusEnum } from "@/entities/my-book/types";
import { readingStatusConfig } from "@/entities/my-book/models/reading-status";
import { useBookStatus } from "../model/use-book-status";
import { Book } from "@/entities/book/types";

interface AddMyListButtonProps {
  book: Book;
}

export const AddMyListButton = ({ book }: AddMyListButtonProps) => {
  const { user, status, handleAddToList, handleChangeStatus } =
    useBookStatus(book);

  // 버튼 렌더링 함수
  const getButtonComponent = () => {
    if (status === -1) {
      return (
        <Button
          disabled={!user}
          onClick={() => handleAddToList(ReadingStatusEnum.READY)}
          className="w-24 rounded-r-none p-0 text-xs"
        >
          <Plus className="size-5 pr-1 opacity-70" />
          읽고싶어요
        </Button>
      );
    }
    return (
      <Button
        className="w-24 cursor-default rounded-r-none border-primary font-semibold text-foreground hover:bg-inherit"
        variant="outline"
        aria-readonly
      >
        <BookmarkCheckIcon
          className={`h-6 w-6 pr-2 ${readingStatusConfig[status]?.color}`}
        />
        {readingStatusConfig[status]?.label || "알 수 없음"}
      </Button>
    );
  };

  return (
    <Tooltip content={!user ? "로그인이 필요합니다" : ""}>
      <div className="flex flex-col">
        <div className="flex w-32 items-stretch">
          {getButtonComponent()}
          <ReadStatusSelect
            status={status === -1 ? ReadingStatusEnum.READY : status}
            onChange={handleChangeStatus}
          />
        </div>
        {!user && (
          <p className="w-full text-center text-xs">로그인이 필요합니다</p>
        )}
      </div>
      {/* 상태 변경해서 책 등록 시 모달이 표시되면 에러가 발생하여 주석 처리 */}
      {/* <AlertDialog
        open={open}
        handleOpen={() => setOpen(false)}
        handleAction={handleAction}
        title="추가된 책을 확인할까요?"
        description="My Books 페이지로 이동합니다."
      /> */}
    </Tooltip>
  );
};
