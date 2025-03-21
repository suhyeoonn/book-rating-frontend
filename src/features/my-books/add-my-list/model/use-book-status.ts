import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { myBookApi } from "@/entities/my-book";
import { updateStatus } from "@/entities/my-book/api";
import { ReadingStatusEnum } from "@/entities/my-book/types";
import { useAuth } from "@/shared/contexts/AuthContext";
import { Book } from "@/entities/book/types";

export const useBookStatus = (book: Book) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // 책 상태 조회
  const { data } = useQuery(myBookApi.bookQueries.status(book.isbn, user));
  const status: ReadingStatusEnum | -1 = data?.status ?? -1;
  const myBookId = data?.myBookId ?? null;

  // 책 추가 뮤테이션
  const mutation = useMutation({
    mutationFn: myBookApi.postBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: myBookApi.bookQueries.all() });
    },
  });

  // 책 추가 핸들러
  const handleAddToList = async (status: ReadingStatusEnum) => {
    mutation.mutate({ ...book, status });
  };

  // 책 상태 변경 핸들러
  const handleChangeStatus = async (status: string) => {
    if (!myBookId) {
      await handleAddToList(+status);
    } else {
      await updateStatus({ id: myBookId, status: +status });
      queryClient.invalidateQueries({
        queryKey: myBookApi.bookQueries.status(book.isbn, user).queryKey,
      });
    }
  };

  return { user, status, handleAddToList, handleChangeStatus };
};
