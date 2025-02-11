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
import { readingStatusList } from "@/entities/my-book/types";

interface AddMyListButtonProps {
  book: AddBook;
}

export const AddMyListButton = ({ book }: AddMyListButtonProps) => {
  const { user } = useAuth();

  const [isInList, setIsInList] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(readingStatusList[0].id);

  const { data } = useQuery(myBookApi.bookQueries.exists(book.isbn));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: myBookApi.postBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myBookApi.bookQueries.all() });
    },
  });

  useEffect(() => {
    if (data?.exists) {
      setIsInList(true);
    }
  }, [data]);

  const handleAddToList = async () => {
    mutation.mutate(book);
    setIsInList(true);
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
          {!isInList ? (
            <Button
              disabled={!user || isInList}
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
              {/* <BookmarkCheckIcon className="h-6 w-6 pr-2 text-gray-700" />
              중단 */}
              <BookmarkCheckIcon className="h-6 w-6 pr-2 text-green-700" />
              완료
              {/* <BookmarkCheckIcon className="h-6 w-6 pr-2 text-red-700" />
              읽는 중 */}
            </Button>
          )}
          <ReadStatusSelect
            status={status}
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
