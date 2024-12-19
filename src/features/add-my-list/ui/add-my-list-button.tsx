import { bookApi } from "@/entities/my-book";
import { postBook } from "@/entities/my-book/api";
import { useAuth } from "@/shared/contexts/AuthContext";
import { AddBook } from "@/shared/types";
import { Button } from "@/shared/ui/button";
import Tooltip from "@/shared/ui/tooltip";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { CheckSquare } from "lucide-react";
import React, { useEffect, useState } from "react";

interface AddMyListButtonProps {
  book: AddBook;
}

export const AddMyListButton = ({ book }: AddMyListButtonProps) => {
  const { user } = useAuth();

  const [isInList, setIsInList] = useState(false);

  const { data } = useQuery(bookApi.bookQueries.exists(book.isbn, user?.id));

  useEffect(() => {
    if (data?.exists) {
      setIsInList(true);
    }
  }, [data]);

  console.log(user, data);

  const handleAddToList = async () => {
    console.log(book);
    await postBook(book);
    setIsInList(true);
  };

  return (
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
  );
};
