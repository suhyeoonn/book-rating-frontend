import ProtectedRoute from "@/features/auth/protected-route";
import { MyBookPage } from "@/pages/my-books";
import React from "react";

export const metadata = {
  title: "My books",
};

const MyBooks = () => {
  return (
    <ProtectedRoute>
      <MyBookPage />
    </ProtectedRoute>
  );
};

export default MyBooks;
