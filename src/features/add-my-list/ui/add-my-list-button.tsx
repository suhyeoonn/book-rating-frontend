import { bookApi } from "@/entities/my-book";
import { postBook } from "@/entities/my-book/api";
import { useAuth } from "@/shared/contexts/AuthContext";
import { AddBook } from "@/shared/types";
import { AlertDialog } from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import Tooltip from "@/shared/ui/tooltip";
import { menus } from "@/widgets/layout-header";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface AddMyListButtonProps {
  book: AddBook;
}

export const AddMyListButton = ({ book }: AddMyListButtonProps) => {
  const { user } = useAuth();

  const [isInList, setIsInList] = useState(false);
  const [open, setOpen] = useState(false);

  const { data } = useQuery(bookApi.bookQueries.exists(book.isbn, user?.id));

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: bookApi.postBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookApi.bookQueries.all() });
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
        <Button disabled={!user || isInList} onClick={handleAddToList}>
          {isInList ? (
            <CheckSquare className="opacity-70 w-6 h-6 pr-2" />
          ) : (
            <HeartFilledIcon className="opacity-70 w-6 h-6 pr-2" />
          )}
          {isInList ? "내 리스트에 추가됨" : "내 리스트에 추가"}
        </Button>
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
