"use client";

import { SearchInput } from "@/features/book-search";

import React, { useState } from "react";
import { CategorySelect } from "./category-select";

export const BookFilterBar = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(351);

  return (
    <div className="mb-8 flex items-stretch justify-start gap-2">
      <CategorySelect
        category={category}
        setCategory={(category) => setCategory(+category)}
      />
      <SearchInput setKeyword={setKeyword} />
    </div>
  );
};
