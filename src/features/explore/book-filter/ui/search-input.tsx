"use client";

import { useExploreStore } from "@/pages/explore/model/explore.store";
import DebounceInput from "@/shared/ui/debounce-input";

export function SearchInput() {
  const { setKeyword } = useExploreStore((state) => state);

  const handleChange = (value: string) => {
    setKeyword(value);
  };

  return (
    <form className="flex w-full max-w-md items-center gap-2">
      <DebounceInput
        changeCallback={handleChange}
        placeholder="책 이름을 검색하세요"
        className="rounded-lg px-2 py-1 text-xs"
      />
    </form>
  );
}
