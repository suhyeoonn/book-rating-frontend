import React from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";

export const LogoFull = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo/logo-full.png"
      alt="Book Rating"
      width={200}
      height={30}
      className={cx(className)}
    />
  );
};

export default LogoFull;
