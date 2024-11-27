"use client";

import { MyBookPage } from "@/pages/my-books";
import { useUser } from "@/shared/contexts/UserContext";
import { useRouter } from "next/navigation";
import React from "react";

const MyBooks = () => {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    if (typeof window !== "undefined") {
      alert("로그인 후 이용 가능합니다.");
    }
    router.push("/login");
    return null;
  }
  return <MyBookPage />;
};

export default MyBooks;
