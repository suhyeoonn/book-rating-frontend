import React from "react";
import Auth from "./auth";
import Logo from "@/shared/ui/logo";
import Nav from "./navbar";

export const Header = () => {
  return (
    <header className="container flex h-16 w-full items-center justify-between border-b">
      <div className="flex h-full items-center gap-10">
        <Logo />
        <Nav />
      </div>
      <Auth />
    </header>
  );
};
