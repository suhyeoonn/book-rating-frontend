import StarIcon from "../../components/icons/star-icon";

export default function StarGroup({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < Math.floor(rating) ? "fill-amber-400" : "fill-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
