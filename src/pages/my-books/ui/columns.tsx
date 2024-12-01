"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Book } from "../../../entities/my-book/models/data-table.interface";
import StarGroup from "@/shared/ui/star-group";
import StatusBadge from "../../../shared/ui/status";
import dayjs from "dayjs";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "book.title",
    header: "제목",
  },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      return <StatusBadge status={row.getValue("status")} />;
    },
  },
  {
    accessorKey: "rating",
    header: "평점",
    cell: ({ row }) => {
      return <StarGroup rating={row.getValue("rating")} />;
    },
  },
  {
    accessorKey: "createdAt",
    header: "추가일",
    cell: ({ row }) => {
      return dayjs(row.getValue("createdAt")).format("YYYY-MM-DD");
    },
  },
  {
    accessorKey: "finishedAt",
    header: "완료일",
    cell: ({ row }) => {
      const date = row.getValue("finishedAt");
      return (date && dayjs().format("YYYY-MM-DD")) || "-";
    },
  },
  {
    accessorKey: "updatedAt",
    header: "마지막 수정일",
    cell: ({ row }) => {
      return dayjs(row.getValue("updatedAt")).format("YYYY-MM-DD");
    },
  },
];
