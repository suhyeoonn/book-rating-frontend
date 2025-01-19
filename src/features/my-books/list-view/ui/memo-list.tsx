import { cn } from "@/shared/utils";
import { FileTextIcon, PlusIcon } from "lucide-react";
import React from "react";

const arr = [
  {
    id: 1,
    title: "a",
  },
  {
    id: 2,
    title: "b",
  },
];

const liStyle =
  "flex cursor-pointer items-center rounded-md p-1 hover:bg-muted/50";

export const MemoList = () => {
  return (
    <ul>
      {arr.map(({ id, title }) => (
        <li key={id} className={liStyle}>
          <FileTextIcon className="mr-1 h-5 w-5 text-slate-500" />
          {title}
        </li>
      ))}
      <li
        className={cn(liStyle, "text-sm text-slate-500 hover:text-slate-700")}
      >
        <PlusIcon className="mr-1 h-5 w-5 text-slate-400" />
        메모 추가
      </li>
    </ul>
  );
};
