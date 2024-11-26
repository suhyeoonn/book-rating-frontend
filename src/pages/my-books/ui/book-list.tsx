"use client";

import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { bookApi } from "@/entities/my-book";
import { useRouter } from "next/navigation";

const BookList = () => {
  const { data } = useQuery(bookApi.bookQueries.list());

  const router = useRouter();
  const handleRowClick = (row: any) => {
    router.push(`/my-books/${row.id}`);
  };

  return (
    data && (
      <DataTable
        columns={columns}
        data={data}
        handleRowClick={handleRowClick}
      />
    )
  );
};
export default BookList;
