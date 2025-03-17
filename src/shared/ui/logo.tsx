import React from "react";
import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      className="ml-4"
      src="/logo/logo-icon.png"
      alt="Book Rating"
      width={40}
      height={40}
    />
  );
};
