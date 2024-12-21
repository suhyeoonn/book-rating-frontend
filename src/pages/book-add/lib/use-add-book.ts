import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { KakaoResponseBook } from "../model/kakao-interface";
import { myBookApi } from "@/entities/my-book";
import { Book } from "@/entities/book/types";

interface Props {
  onSuccess: (book: Book) => void;
  onError: (err: Error) => void;
}
export const useAddBook = (mutateCallback: Props) => {
  const [data, setData] = useState<KakaoResponseBook[]>();
  const [selectedBook, setSelectedBook] = useState<KakaoResponseBook | null>(
    null
  );
  const [open, setOpen] = useState(false);

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
      mutation.mutate(
        { ...selectedBook, authors: selectedBook.authors.join(", ") },
        mutateCallback
      );

      setOpen(false);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  const handleChange = async (keyword: string) => {
    if (!keyword) {
      setData([]);
      return;
    }

    const { data } = await axios.get(`/api/kakao/books?keyword=${keyword}`);
    setData(
      data.documents.map((d: KakaoResponseBook) => ({
        ...d,
        authors: d.authors,
      }))
    );
  };

  return { onSubmit, handleChange, data, selectedBook, setSelectedBook };
};
