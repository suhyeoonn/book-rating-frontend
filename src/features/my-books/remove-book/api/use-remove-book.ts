import { bookQueries, deleteBook } from "@/entities/my-book/api";
import { toast } from "@/shared/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: deleteBook,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookQueries.list().queryKey });
      router.replace("/my-books");
      toast({ title: "책이 삭제되었습니다." });
    },
  });
};
