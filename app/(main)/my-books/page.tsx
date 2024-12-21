import Protected from "@/features/auth/protected";
import { MyBookPage } from "@/pages/my-books";
import React from "react";

export const metadata = {
  title: "My books",
};

const MyBooks = () => {
  return (
    <Protected>
      <MyBookPage />
    </Protected>
  );
};

export default MyBooks;
