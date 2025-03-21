"use client";

import React from "react";
import { CategorySelect, SearchInput } from "@/features/explore/book-filter";

export const BookFilterBar = () => {
  return (
    <div className="mb-8 flex items-stretch justify-start gap-2 px-5">
      <CategorySelect />
      <SearchInput />
    </div>
  );
};
