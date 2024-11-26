import { Badge } from "@/shared/ui/badge";
import { cn } from "@/shared/utils";
import React from "react";

enum Status {
  READY,
  READING,
  STOPPED,
  FINISHED,
}

const variants = {
  [Status.READY]: {
    style: "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20",
    label: "Ready",
  },
  [Status.READING]: {
    style: "bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-600/10",
    label: "Reading",
  },
  [Status.STOPPED]: {
    style: "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10",
    label: "Stopped",
  },
  [Status.FINISHED]: {
    style: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/10",
    label: "Finished",
  },
};

const StatusBadge = ({ status }: { status: Status }) => {
  const { style, label } = variants[status];
  return <Badge className={cn(style)}>{label}</Badge>;
};

export default StatusBadge;
