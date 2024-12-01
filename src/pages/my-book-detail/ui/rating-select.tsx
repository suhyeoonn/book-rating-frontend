"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import StarGroup from "@/shared/ui/star-group";
import { useSelect } from "@/shared/hooks/use-select";

const RatingSelect = ({ value }: { value: number }) => {
  const { selectedValue, handleChange } = useSelect(value + "");

  return (
    <Select defaultValue={selectedValue} onValueChange={handleChange}>
      <SelectTrigger>
        <SelectValue placeholder="상태" />
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

export default RatingSelect;
