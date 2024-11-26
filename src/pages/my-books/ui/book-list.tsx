"use client";

import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useQuery } from "@tanstack/react-query";
import { bookApi } from "@/entities/my-book";

const BookList = () => {
  const { data } = useQuery(bookApi.bookQueries.list());

  return data && <DataTable columns={columns} data={data} />;
};
export default BookList;
