"use client";

import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/shared/ui/select";
import StarGroup from "@/shared/ui/star-group";
import { useSelect } from "@/shared/lib/use-select";

export const RatingSelect = ({
  rating,
  changeCallback,
}: {
  rating: number;
  changeCallback: (value: string) => void;
}) => {
  const { selectedValue, handleChange } = useSelect(
    rating > 0 ? rating + "" : "",
  );

  useEffect(() => {
    handleChange(rating + "");
  }, [rating]);

  return (
    <Select
      defaultValue={selectedValue}
      onValueChange={(value: string) => {
        handleChange(value);
        changeCallback(value);
      }}
    >
      <SelectTrigger>
        <StarGroup rating={selectedValue ? +selectedValue : 0} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: 5 }).map((_, i) => (
            <SelectItem value={i + 1 + ""} key={i}>
              <StarGroup rating={i + 1} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
