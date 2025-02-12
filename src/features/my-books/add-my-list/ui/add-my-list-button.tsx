"use client";

import { myBookApi } from "@/entities/my-book";
import { useAuth } from "@/shared/contexts/AuthContext";
import { AddBook } from "@/shared/types";
import { AlertDialog } from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import Tooltip from "@/shared/ui/tooltip";
import { menus } from "@/widgets/layout-header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BookmarkCheckIcon, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ReadStatusSelect } from "./read-status-select";
import { ReadingStatusEnum } from "@/entities/my-book/types";
import { readingStatusConfig } from "@/entities/my-book/models/reading-status";

interface AddMyListButtonProps {
  book: AddBook;
}

export const AddMyListButton = ({ book }: AddMyListButtonProps) => {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("-1");

  const { data } = useQuery(myBookApi.bookQueries.status(book.isbn, user));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: myBookApi.postBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myBookApi.bookQueries.all() });
    },
  });

  useEffect(() => {
    if (data) {
      setStatus(data.status + "");
    }
  }, [data]);

  const handleAddToList = async () => {
    mutation.mutate(book);
    setOpen(true);
  };

  const router = useRouter();
  const handleAction = () => {
    router.push(menus[1].href);
  };

  return (
    <>
      <Tooltip content={!user ? "로그인이 필요합니다" : ""}>
        <div className="flex items-stretch">
          {status === "-1" ? (
            <Button
              disabled={!user}
              onClick={handleAddToList}
              className="rounded-r-none"
            >
              <Plus className="h-6 w-6 pr-2 opacity-70" />
              읽기 전
            </Button>
          ) : (
            <Button
              className="w-24 cursor-default rounded-r-none border-primary font-semibold text-foreground hover:bg-inherit"
              variant="outline"
              aria-readonly
            >
              <BookmarkCheckIcon
                className={`h-6 w-6 pr-2 ${readingStatusConfig[status]?.color}`}
              />
              {readingStatusConfig[status]?.text || "알 수 없음"}
            </Button>
          )}
          <ReadStatusSelect
            status={status || ReadingStatusEnum.READY + ""}
            onChange={(status) => setStatus(status)}
          />
        </div>
      </Tooltip>
      <AlertDialog
        open={open}
        handleOpen={() => setOpen(false)}
        handleAction={handleAction}
        title="추가된 책을 확인할까요?"
        description="My Books 페이지로 이동합니다."
      />
    </>
  );
};
