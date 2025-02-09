"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { menus } from "../model/menu";

const active = "border-b-2 border-b-primary";
const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full items-stretch gap-5 md:gap-10">
      {menus.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={cx(
            href === pathname ? active : "text-slate-500",
            "inline-flex items-center px-2 text-sm font-medium transition duration-200 md:text-base",
          )}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
