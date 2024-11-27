"use client";

import { MyBookPage } from "@/pages/my-books";
import { useUser } from "@/shared/contexts/UserContext";
import { useRouter } from "next/navigation";
import React from "react";

const MyBooks = () => {
  const { user } = useUser();
  const router = useRouter();

  if (!user) {
    alert("로그인이 필요한 서비스입니다.");
    router.push("/login");
    return null;
  }
  return <MyBookPage />;
};

export default MyBooks;
