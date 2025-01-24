import { Note } from "@/entities/note";
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

  return { title, handleChangeTitle, content: note.content };
};
