"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Book } from "../../../entities/my-book/models/data-table-interface";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "status",
    header: "상태",
  },
  {
    accessorKey: "book.title",
    header: "제목",
  },
  {
    accessorKey: "rating",
    header: "평점",
  },
  {
    accessorKey: "book.authors",
    header: "저자",
  },
  {
    accessorKey: "createdAt",
    header: "추가일",
  },
  {
    accessorKey: "finishedAt",
    header: "완료일",
  },
];
