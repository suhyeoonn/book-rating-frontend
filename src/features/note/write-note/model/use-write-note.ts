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

  return { title, handleChangeTitle, content: note.content };
};
