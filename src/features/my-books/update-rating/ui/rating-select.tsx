"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/shared/ui/select";
import StarGroup from "@/shared/ui/star-group";
import { useSelect } from "@/shared/hooks/use-select";
import { useUpdateRating } from "../api/use-update-rating";

export const RatingSelect = ({ id, value }: { id: number; value: number }) => {
  const { selectedValue, handleChange } = useSelect(
    value > 0 ? value + "" : ""
  );

  const mutationUpdate = useUpdateRating();

  const changeRating = (value: string) => {
    handleChange(value);
    mutationUpdate.mutate({ id, rating: +value });
  };

  return (
    <Select defaultValue={selectedValue} onValueChange={changeRating}>
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
