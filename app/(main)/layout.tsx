import { Header } from "@/widgets/layout-header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Book Rating",
    default: "Book Rating",
  },
  description: "책 리뷰와 별점을 기록하며 독서의 즐거움을 더하세요:)",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="py-7 w-full flex flex-col items-center min-h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
