import React from "react";
import Auth from "../../../components/auth";
import Logo from "@/shared/ui/logo";
import Nav from "./navbar";

export const Header = () => {
  return (
    <header className="container w-full flex items-center justify-between h-16 border-b">
      <div className="flex gap-10 items-center h-full">
        <Logo />
        <Nav />
      </div>
      <Auth />
    </header>
  );
};
