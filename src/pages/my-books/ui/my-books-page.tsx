import React from "react";
import { DataTable } from "./data-table";
import { Book } from "../models/data-table-interface";
import { columns } from "./columns";

async function getData(): Promise<Book[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      title: "book1",
      status: "finish",
      score: 5,
      authors: "author1",
      createdDate: "2024-01-01",
      finishedDate: "2024-01-01",
    },
    {
      id: 2,
      title: "book1",
      status: "finish",
      score: 5,
      authors: "author1",
      createdDate: "2024-01-01",
      finishedDate: "2024-01-01",
    },
  ];
}

export const MyBookPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
