"use client";

import { myBookApi } from "@/entities/my-book";
import { useAuth } from "@/shared/contexts/AuthContext";
import { AddBook } from "@/shared/types";
import { AlertDialog } from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import Tooltip from "@/shared/ui/tooltip";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BookmarkCheckIcon, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ReadStatusSelect } from "./read-status-select";
import { ReadingStatusEnum } from "@/entities/my-book/types";
import { readingStatusConfig } from "@/entities/my-book/models/reading-status";
import { updateStatus } from "@/entities/my-book/api";

interface AddMyListButtonProps {
  book: AddBook;
}

type NoneReadingStatus = -1;

export const AddMyListButton = ({ book }: AddMyListButtonProps) => {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<ReadingStatusEnum | NoneReadingStatus>(
    -1,
  );
  const [myBookId, setMyBookId] = useState<number | null>();

  const { data } = useQuery(myBookApi.bookQueries.status(book.isbn, user));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: myBookApi.postBook,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: myBookApi.bookQueries.all() });
      setMyBookId(data.id);
    },
  });

  useEffect(() => {
    if (data) {
      setStatus(data.status);
      setMyBookId(data.myBookId);
    }
  }, [data]);

  const handleAddToList = async (status: ReadingStatusEnum) => {
    mutation.mutate({
      ...book,
      status,
    });
    setOpen(true);
  };

  const changeHandler = async (status: string) => {
    if (!myBookId) {
      await handleAddToList(+status);
      return;
    }
    await updateStatus({ id: myBookId, status: +status });
    queryClient.invalidateQueries({
      queryKey: myBookApi.bookQueries.status(book.isbn, user).queryKey,
    });
  };

  return (
    <>
      <Tooltip content={!user ? "로그인이 필요합니다" : ""}>
        <div className="flex flex-col">
          <div className="flex items-stretch">
            {status === -1 ? (
              <>
                <Button
                  disabled={!user}
                  onClick={() => handleAddToList(ReadingStatusEnum.READY)}
                  className="w-32 rounded-r-none"
                >
                  <Plus className="h-6 w-6 pr-2 opacity-70" />
                  읽고싶어요
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
            <ReadStatusSelect
              status={status === -1 ? ReadingStatusEnum.READY : status}
              onChange={(status) => changeHandler(status)}
            />
          </div>
          {!user && (
            <p className="w-full text-center text-xs">로그인이 필요합니다</p>
          )}
        </div>
      </Tooltip>
      {/* 상태 변경해서 책 등록 시 모달이 표시되면 에러가 발생하여 주석 처리 */}
      {/* <AlertDialog
        open={open}
        handleOpen={() => setOpen(false)}
        handleAction={handleAction}
        title="추가된 책을 확인할까요?"
        description="My Books 페이지로 이동합니다."
      /> */}
    </>
  );
};
