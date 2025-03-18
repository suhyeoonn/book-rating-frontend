import { Header } from "@/widgets/layout-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - IT Book Rating",
    default: "IT Book Rating",
  },
  description:
    "개발자를 위한 IT·프로그래밍 서적 평가 플랫폼. 리뷰, 별점, 추천 레벨을 통해 자신에게 맞는 책을 찾아보세요!",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen w-full flex-col items-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
