"use client";

import * as React from "react";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ReadingStatusEnum, readingStatusList } from "@/entities/my-book/types";
import { ReadingStatusBadge } from "@/entities/my-book";

interface ReadStatusSelectProps {
  status: ReadingStatusEnum;
  onChange: (status: string) => void;
}

export function ReadStatusSelect({ status, onChange }: ReadStatusSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-8 rounded-l-none border-l border-l-white/30 p-0">
          <ChevronDown className="h-4 w-4 text-base" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuRadioGroup
          value={status + ""}
          onValueChange={(status) => onChange(status)}
        >
          {readingStatusList
            .filter((item) => status !== item.id)
            .map((status) => (
              <DropdownMenuRadioItem
                key={status.id}
                value={status.id + ""}
                className="cursor-pointer"
              >
                <ReadingStatusBadge status={status.id} />
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
