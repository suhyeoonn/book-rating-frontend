import { Skeleton } from "@/shared/ui/skeleton";
import React from "react";

export const SkeletonSectionItem = () => {
  return (
    <div className="group col-span-1 cursor-not-allowed flex-col overflow-hidden rounded-lg border-gray-200 shadow-lg">
      <Skeleton className="h-52 w-[400px]" />
      <div className="flex-1 space-y-1 bg-white p-3">
        <Skeleton className="mb-2 h-4 w-full truncate text-sm font-normal" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
};
