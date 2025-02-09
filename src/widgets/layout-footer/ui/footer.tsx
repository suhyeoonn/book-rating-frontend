import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="container flex w-full flex-col justify-between gap-2 border-t border-gray-100 p-4 text-slate-500 md:flex-row md:gap-0 md:text-sm">
      <p className="order-2 text-xs md:order-1 md:text-sm">
        © 2024 Book Rating. All rights reserved.
      </p>
      <div className="flex items-center justify-between md:order-2">
        <div className="flex gap-5 text-xs">
          <Link href="/privacy-policy" className="pr-5">
            개인정보 처리방침
          </Link>
          {/* <Link href="/terms">이용약관</Link> */}
        </div>
        <Link
          target="_blank"
          href="https://github.com/suhyeoonn/book-rating-frontend"
        >
          <Image
            src={"/github.svg"}
            width={20}
            height={20}
            alt="github"
            className="md:h-6 md:w-6"
          />
        </Link>
      </div>
    </footer>
  );
};
