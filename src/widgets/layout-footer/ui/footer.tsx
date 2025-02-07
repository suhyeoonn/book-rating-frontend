import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="container flex w-full justify-between border-t border-gray-100 py-4 text-sm text-slate-500">
      <p>© 2024 Book Rating. All rights reserved.</p>
      <div className="flex items-center">
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
          <Image src={"/github.svg"} width={24} height={24} alt="github" />
        </Link>
      </div>
    </footer>
  );
};
