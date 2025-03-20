import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/shared/ui/select";
import { useExploreStore } from "../../../../pages/explore/model/explore.store";

const categories = [
  { value: 351, label: "카테고리 전체" },
  { value: 437, label: "프로그래밍 언어" },
  { value: 7396, label: "프로그래밍 개발/방법론" },
  { value: 2719, label: "컴퓨터 공학" },
  { value: 363, label: "OS/Networking" },
  { value: 55977, label: "모바일 프로그래밍" },
  { value: 6355, label: "웹 프로그래밍" },
];

export const CategorySelect = () => {
  const { category, setCategory } = useExploreStore((state) => state);

  return (
    <Select
      value={category + ""}
      onValueChange={(value) => setCategory(+value)}
    >
      <SelectTrigger className="max-w-44 px-2 py-1">
        <SelectValue placeholder="카테고리 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value + ""}
              className="cursor-pointer"
            >
              {category.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
