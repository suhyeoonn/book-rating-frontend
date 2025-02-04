"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const next = "/";

    if (token) {
      localStorage.setItem("jwt", token);
      router.push(next);
    } else {
      router.push("/login");
    }
  }, []);

  return <p>로그인 처리 중...</p>;
}
