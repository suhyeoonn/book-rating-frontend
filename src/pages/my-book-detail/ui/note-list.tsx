import { cn } from "@/shared/utils";
import { FileIcon, FileTextIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { SideNoteEditor } from "@/features/note/write-note";
import { useMyBookStore } from "@/entities/my-book/models/mybook.store";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Note, noteApi, noteQueries } from "@/entities/note";

const liStyle =
  "flex cursor-pointer items-center rounded-md p-1 hover:bg-muted/50";

export const NoteList = () => {
  const myBookId = useMyBookStore((state) => state.bookId);

  const { data, isFetching } = useQuery(noteQueries.list(myBookId));

  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<Note | null>(null);

  if (!myBookId) return <></>;

  const queryClient = useQueryClient();
  const handleCreateMemo = async () => {
    const { data } = await noteApi.create(myBookId);

    queryClient.invalidateQueries({
      queryKey: noteQueries.list(myBookId).queryKey,
    });

    setNote(data);
    setOpen(true);
  };

  const handleOpenSlider = (note: Note) => {
    setNote(note);
    setOpen(true);
  };

  return (
    <>
      <ul>
        {data &&
          data.map((note) => (
            <li
              key={note._id}
              className={cn(liStyle, "font-semibold text-slate-600")}
              onClick={() => handleOpenSlider(note)}
            >
              {note.content ? (
                <FileTextIcon className="mr-1 h-5 w-5 text-slate-400" />
              ) : (
                <FileIcon className="mr-1 h-5 w-5 text-slate-400" />
              )}
              {note.title ? (
                note.title
              ) : (
                <span className="text-slate-400">새 노트</span>
              )}
            </li>
          ))}
        <li
          className={cn(liStyle, "text-slate-500 hover:text-slate-700")}
          onClick={handleCreateMemo}
        >
          <PlusIcon className="mr-1 h-5 w-5 text-slate-400" />새 노트
        </li>
      </ul>
      {note && <SideNoteEditor open={open} setOpen={setOpen} note={note} />}
    </>
  );
};
