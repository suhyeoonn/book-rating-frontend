import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { KakaoResponseBook } from "../model/kakao-interface";
import { myBookApi } from "@/entities/my-book";
import { Book } from "@/entities/book/types";
import { ReadingStatusEnum } from "@/entities/my-book/types";

interface Props {
  onSuccess: (book: Book) => void;
  onError: (err: Error) => void;
}
export const useAddBook = (mutateCallback: Props) => {
  const [selectedBook, setSelectedBook] = useState<KakaoResponseBook | null>(
    null,
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: myBookApi.postBook,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: myBookApi.bookQueries.all() });
    },
  });

  const onSubmit = async () => {
    if (!selectedBook) return;
    try {
      // TODO: 제거
      // mutation.mutate(
      //   {
      //     ...selectedBook,
      //     author: selectedBook.authors.join(", "),
      //     status: ReadingStatusEnum.READY,
      //   },
      //   mutateCallback,
      // );
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  return { onSubmit, selectedBook, setSelectedBook };
};
