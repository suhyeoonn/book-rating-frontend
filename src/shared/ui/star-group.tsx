import { Star } from "lucide-react";

export default function StarGroup({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          strokeWidth={0}
          key={i}
          className={`h-5 w-5 ${
            i < Math.floor(rating) ? "fill-amber-400" : "fill-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
