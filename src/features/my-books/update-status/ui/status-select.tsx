"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { ReadingStatusBadge } from "@/entities/my-book";
import { useSelect } from "@/shared/lib/use-select";
import { useUpdateStatus } from "../model/use-update-status";

export const StatusSelect = ({ id, value }: { id: number; value: number }) => {
  const { selectedValue, handleChange } = useSelect(value + "");

  const mutationUpdate = useUpdateStatus();

  const changeStatus = (value: string) => {
    handleChange(value);
    mutationUpdate.mutate({ id, status: +value });
  };

  return (
    <Select defaultValue={selectedValue} onValueChange={changeStatus}>
      <SelectTrigger className="w-[100px] border-0 px-1 py-1 pl-0">
        <SelectValue placeholder="상태" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: 4 }).map((_, i) => (
            <SelectItem key={i} value={i + ""} className="cursor-pointer">
              <ReadingStatusBadge status={i} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
