import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoFull from "./logo-full";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <h1>
        <LogoFull className="ml-2 mt-2 hidden lg:block" />
        <Image
          className="ml-2 mt-2 block lg:hidden"
          src="/logo/logo-icon.png"
          alt="Book Rating"
          width={45}
          height={40}
        />
      </h1>
    </Link>
  );
};

export default Logo;
