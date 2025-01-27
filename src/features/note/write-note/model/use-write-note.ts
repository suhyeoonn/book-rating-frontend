import { Note, noteApi } from "@/entities/note";
import { toast } from "@/shared/lib/use-toast";
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

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

  const deleteNote = async (closeDialog: () => void) => {
    try {
      await noteApi.delete(note._id);
      toast({ title: "삭제되었습니다." });
      closeDialog();
    } catch (err) {
      toast({
        title: "문제가 발생했습니다.",
        description: "잠시 후 다시 시도하세요",
        variant: "destructive",
      });
    }
  };

  return { title, handleChangeTitle, content: note.content, deleteNote };
};
