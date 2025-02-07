import { cx } from "class-variance-authority";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"], // 사용할 문자 셋
  weight: ["400", "700"], // 폰트 굵기
});

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <h1
        className={cx(
          dancingScript.className,
          className,
          "block text-3xl font-bold lg:hidden",
        )}
      >
        <Image
          className="ml-2 mt-2"
          src="/logo/logo-icon.png"
          alt="Book Rating"
          width={45}
          height={40}
        />
      </h1>
      <h1
        className={cx(
          dancingScript.className,
          className,
          "hidden text-3xl font-bold lg:block",
        )}
      >
        <Image
          src="/logo/logo-full.png"
          alt="Book Rating"
          width={200}
          height={30}
          className="ml-2 mt-2"
        />
      </h1>
    </Link>
  );
};

export default Logo;
