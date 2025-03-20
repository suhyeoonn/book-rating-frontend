"use client";

import React from "react";
import BookList from "./book-list";

export const MyBookPage = () => {
  return (
    <div className="container mx-auto space-y-10 py-10">
      <BookList />
    </div>
  );
};
