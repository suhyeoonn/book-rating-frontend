"use client";

import Protected from "@/features/auth/protected";
import { MyBookPage } from "@/pages/my-books";
import React from "react";

const MyBooks = () => {
  return (
    <Protected>
      <MyBookPage />
    </Protected>
  );
};

export default MyBooks;
