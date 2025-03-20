import React from "react";
import Auth from "./auth";
import { Logo } from "@/shared/ui/logo";
import Nav from "./navbar";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="container flex h-16 w-full items-center justify-between border-b">
      <div className="flex h-full items-center gap-5 md:gap-10">
        <Link href="/">
          <h1 className="flex items-center gap-2 text-xl font-bold">
            <Logo />
            <span className="hidden lg:block">IT Book Rating</span>
          </h1>
        </Link>
        <Nav />
      </div>
      <Auth />
    </header>
  );
};
