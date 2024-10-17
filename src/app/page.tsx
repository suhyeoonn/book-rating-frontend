"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6xrMay5lJtg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SearchInput from "@/components/search-input";
import BookList from "@/components/book/book-list";
import BookAdd from "@/components/book/book-add";
import { Button } from "@/components/ui/button";
import { cx } from "class-variance-authority";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"], // 사용할 문자 셋
  weight: ["400", "700"], // 폰트 굵기
});

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 md:px-6 py-4">
        <div className={cx(dancingScript.className, "text-3xl font-bold")}>
          Book Rating
        </div>
        <div>
          {isLogin ? (
            <div className="flex gap-2 items-center">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="border-gray-200"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
          )}
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <SearchInput />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BookAdd />
          <BookList />
        </div>
      </div>
    </>
  );
}
