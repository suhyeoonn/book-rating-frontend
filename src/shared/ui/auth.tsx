"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { useAuth } from "@/shared/contexts/AuthContext";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Auth = () => {
  const { user, logout } = useAuth();
  const { username } = user || {};

  return (
    <div>
      {username ? (
        <div className="flex items-center">
          <div className="flex h-10 items-center gap-2 rounded-lg py-2">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={"/placeholder-user.jpg"} alt="User" />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
            <span className="border-r pr-3 text-sm font-medium text-slate-900">
              {username}
            </span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={logout}
            className="font-medium text-slate-900"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="space-x-2">
          {/* <Button variant="ghost" asChild>
            <Link href="/register">Sign up</Link>
          </Button> */}

          <Button
            variant="ghost"
            asChild
            className="font-semibold text-slate-900"
          >
            <Link href="/login">
              <div className="flex items-center gap-1">
                Login in
                <ArrowRightIcon />
              </div>
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Auth;
