"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Book } from "../models/data-table-interface";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "status",
    header: "상태",
  },
  {
    accessorKey: "title",
    header: "제목",
  },
  {
    accessorKey: "score",
    header: "점수",
  },
  {
    accessorKey: "authors",
    header: "저자",
  },
  {
    accessorKey: "createdDate",
    header: "추가일",
  },
  {
    accessorKey: "finishedDate",
    header: "완료일",
  },
];
