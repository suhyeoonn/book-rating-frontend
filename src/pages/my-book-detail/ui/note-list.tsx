import { cn } from "@/shared/utils";
import { FileTextIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { createNote, Note, SideNoteEditor } from "@/features/note/create-note";

const arr: Note[] = [
  {
    id: 1,
    title: "a",
    createdAt: "2024-12-22 3:00 AM",
    content: "",
  },
  {
    id: 2,
    title: "b",
    createdAt: "2024-12-22 3:00 AM",
    content: "",
  },
];

const liStyle =
  "flex cursor-pointer items-center rounded-md p-1 hover:bg-muted/50";

export const NoteList = ({ bookId }: { bookId: number }) => {
  const [open, setOpen] = useState(false);
  const [memo, setMemo] = useState<Note | null>(null);

  const handleCreateMemo = async () => {
    const result = await createNote({ bookId });
    setMemo(result);
    setOpen(true);
  };

  const handleOpenSlider = (memo: Note) => {
    setMemo(memo);
    setOpen(true);
  };

  return (
    <>
      <ul>
        {arr.map((memo) => (
          <li
            key={memo.id}
            className={liStyle}
            onClick={() => handleOpenSlider(memo)}
          >
            <FileTextIcon className="mr-1 h-5 w-5 text-slate-500" />
            {memo.title}
          </li>
        ))}
        <li
          className={cn(liStyle, "text-sm text-slate-500 hover:text-slate-700")}
          onClick={handleCreateMemo}
        >
          <PlusIcon className="mr-1 h-5 w-5 text-slate-400" />
          메모 추가
        </li>
      </ul>
      {memo && <SideNoteEditor open={open} setOpen={setOpen} memo={memo} />}
    </>
  );
};
