import { Button } from "@/shared/ui/button";
import { menus } from "@/widgets/layout-header";
import Link from "next/link";
import React from "react";

export const HomeBanner = () => {
  return (
    <section className="container relative flex h-[30vh] w-full items-center justify-center border-b">
      <div className="space-y-4 text-center">
        <h2 className="mb-4 text-xl font-bold text-[#333] sm:text-2xl">
          좋은 책을 발견하고, 함께 나누세요!
        </h2>
        <p className="mb-8 text-base font-medium text-[#888] sm:text-base">
          개발자들에게 추천하고 싶은 책이 있다면 리뷰를 남겨보세요.
        </p>
        <Link href={menus[0].href} className="block">
          <Button size="lg" className="text-base font-semibold shadow-2xl">
            책 탐험하기
          </Button>
        </Link>
      </div>
    </section>
  );
};
