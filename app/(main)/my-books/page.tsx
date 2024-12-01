"use client";

import { MyBookPage } from "@/pages/my-books";
import { useUser } from "@/shared/contexts/UserContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MyBooks = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      if (typeof window !== "undefined") {
        alert("로그인 후 이용 가능합니다.");
        router.push("/login");
      }
    }
  }, [isLoading, user]);

  if (!user) return null;

  return <MyBookPage />;
};

export default MyBooks;
