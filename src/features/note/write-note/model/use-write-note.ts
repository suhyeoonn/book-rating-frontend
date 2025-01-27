import { Note, noteApi, noteQueries } from "@/entities/note";
import { toast } from "@/shared/lib/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";

export const useWriteNote = (note: Note) => {
  const [title, setTitle] = useState(note.title);

  useEffect(() => {
    setTitle(note.title);
  }, [note.title]);

  const handleChangeTitle = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  const queryClient = useQueryClient();

  const deleteNote = (closeDialog: () => void) => {
    return useMutation({
      mutationFn: (id: string) => noteApi.delete(id),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: noteQueries.list(note.bookId).queryKey,
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

  return { title, handleChangeTitle, content: note.content, deleteNote };
};
