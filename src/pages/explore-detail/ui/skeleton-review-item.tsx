import { Skeleton } from "@/shared/ui/skeleton";

export default function SkeletonBookReview() {
  return (
    <div className="flex items-start gap-4 border-b border-b-gray-100 pb-4">
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex cursor-not-allowed items-center gap-2">
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
