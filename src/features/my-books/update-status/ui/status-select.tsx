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
import StatusBadge from "@/shared/ui/status";
import { useSelect } from "@/shared/hooks/use-select";
import { useUpdateStatus } from "../api/use-update-status";

export const StatusSelect = ({ id, value }: { id: number; value: number }) => {
  const { selectedValue, handleChange } = useSelect(value + "");

  const mutationUpdate = useUpdateStatus();

  const changeStatus = (value: string) => {
    handleChange(value);
    mutationUpdate.mutate({ id, status: +value });
  };

  return (
    <Select defaultValue={selectedValue} onValueChange={changeStatus}>
      <SelectTrigger className="w-[100px] px-1 py-1 border-0">
        <SelectValue placeholder="상태" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Array.from({ length: 4 }).map((_, i) => (
            <SelectItem key={i} value={i + ""}>
              <StatusBadge status={i} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
