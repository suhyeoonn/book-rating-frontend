import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/utils";
import React from "react";
import { ReadingStatus } from "../models/reading-status.enum";

const variants = {
  [ReadingStatus.READY]: {
    style: "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20",
    label: "읽기 전",
  },
  [ReadingStatus.READING]: {
    style: "bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-600/10",
    label: "읽는 중",
  },
  [ReadingStatus.STOPPED]: {
    style: "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10",
    label: "중단",
  },
  [ReadingStatus.FINISHED]: {
    style: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10",
    label: "완료",
  },
};

export const ReadingStatusBadge = ({ status }: { status: ReadingStatus }) => {
  const { style, label } = variants[status];
  return <Badge className={cn(style)}>{label}</Badge>;
};
