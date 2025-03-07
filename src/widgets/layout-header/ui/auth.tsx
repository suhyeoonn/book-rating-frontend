"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/shared/ui/avatar";
import React from "react";
import { Button } from "../../../shared/ui/button";
import Link from "next/link";
import { useAuth } from "@/shared/contexts/AuthContext";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useLogout } from "../api/use-logout";

const Auth = () => {
  const { user } = useAuth();
  const { username } = user || {};

  const { logout } = useLogout();

  return (
    <div>
      {username ? (
        <div className="flex items-center">
          <div className="flex h-10 items-center gap-2 rounded-lg py-2">
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={"/placeholder-user.jpg"} alt="User" />
              <AvatarFallback>{username}</AvatarFallback>
            </Avatar>
            <span className="hidden border-r pr-3 text-sm font-normal text-slate-900 md:block">
              {username}
            </span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={logout}
            className="font-normal text-slate-900"
          >
            Logout
          </Button>
        </div>
      ) : (
        <div className="space-x-2">
          <Button
            variant="ghost"
            asChild
            className="font-medium text-slate-900"
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
