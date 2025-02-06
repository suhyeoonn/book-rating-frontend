import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "@/shared/lib/use-toast";
import { noteApi, noteQueries } from "@/entities/note";

export const useDeleteNote = (bookId: number, closeDialog: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => noteApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: noteQueries.list(bookId).queryKey,
      });
      toast({ title: "삭제되었습니다." });
      closeDialog();
    },
    onError: (err) => {
      toast({
        title: "문제가 발생했습니다.",
        description: "잠시 후 다시 시도하세요",
        variant: "destructive",
      });
      console.error(err);
    },
  });
};
