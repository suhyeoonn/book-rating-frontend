import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/utils";
import React from "react";
import { readingStatusList, ReadingStatusEnum } from "../models/reading-status";

const variants = {
  [ReadingStatusEnum.READY]: {
    style: "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20",
    label: readingStatusList[0].label,
  },
  [ReadingStatusEnum.READING]: {
    style: "bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-600/10",
    label: readingStatusList[1].label,
  },
  [ReadingStatusEnum.STOPPED]: {
    style: "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10",
    label: readingStatusList[2].label,
  },
  [ReadingStatusEnum.FINISHED]: {
    style: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10",
    label: readingStatusList[3].label,
  },
};

export const ReadingStatusBadge = ({
  status,
}: {
  status: ReadingStatusEnum;
}) => {
  const { style, label } = variants[status];
  return <Badge className={cn(style)}>{label}</Badge>;
};
