import { Button } from "@/shared/ui/button";
import { menus } from "@/widgets/layout-header";
import Link from "next/link";
import { BookList } from "./book-list";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#333] md:text-5xl">
            {/* 책을 읽고, 나만의 기록을 남겨보세요. */}
            책, 그 너머를 향해
          </h2>
          <p className="text-[#888 mb-8 text-2xl font-medium">
            읽고 기록하고 나누세요.
            <br />
            당신의 기록이 또 다른 독서의 시작이 됩니다.
          </p>
          <Link href={menus[0].href}>
            <Button size="lg" className="text-base font-semibold shadow-2xl">
              책 탐험하기
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Books */}
      <section className="flex w-full justify-center bg-gradient-to-t from-primary/10 to-primary/5 py-16">
        <div className="container px-4 sm:px-0">
          <h2 className="mb-8 text-3xl font-bold">지금, 이 책</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <BookList />
          </div>
        </div>
      </section>

      {/* User Login/Register CTA */}
      <section className="flex h-[60vh] items-center bg-background py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">우리와 함께해요!</h2>
          <p className="mb-8 text-xl">로그인하고 다양한 기능을 즐겨보세요.</p>
          <div className="space-x-4">
            <Link href="/login">
              <Button size="lg" className="shadow-lg">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
