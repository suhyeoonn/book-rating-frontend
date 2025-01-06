"use client";

import DebounceInput from "@/shared/ui/debounce-input";

interface SearchInputProps {
  setKeyword: (value: string) => void;
}

export function SearchInput({ setKeyword }: SearchInputProps) {
  const handleChange = (value: string) => {
    setKeyword(value);
  };

  return (
    <form className="flex w-full max-w-md items-center gap-2">
      <DebounceInput
        changeCallback={handleChange}
        placeholder="책 이름을 검색하세요"
        className="rounded-lg px-2 py-1 text-xs placeholder:text-xs"
      />
    </form>
  );
}
