"use client";

import { InfoIcon } from "lucide-react";
import { useSectionList } from "../model/useSectionList";
import { BookSection } from "./book-section";
import { HomeBanner } from "./home-banner";

export function HomePage() {
  const { newItems, bestseller, popular, mostAdded } = useSectionList();

  return (
    <>
      <HomeBanner />

      <div className="mb-8">
        <BookSection title="평점 높은 책" data={popular} />
        <BookSection title="이번 달 신간" data={newItems} />
        <BookSection title="개발자가 많이 읽는 책" data={mostAdded} />
        <BookSection
          title={
            <div className="flex items-end gap-1">
              베스트셀러
              <div className="flex items-center pb-0.5 text-gray-500">
                <InfoIcon className="size-3" />
                <span className="ml-0.5 text-sm font-normal">알라딘 제공</span>
              </div>
            </div>
          }
          data={bestseller}
        />
      </div>
    </>
  );
}
