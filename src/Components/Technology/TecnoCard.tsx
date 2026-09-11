
import { FaStar } from "react-icons/fa";
import type { ITechnology } from "../Types/Type";

interface TechnologyCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (technology: ITechnology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl">
      
      {/* Top Section */}
      <div className="flex items-start justify-between gap-4">
        
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 p-3 transition-transform duration-300 group-hover:scale-105">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Badge */}
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-[#D91B7E]">
          {technology.badge}
        </span>
      </div>

      {/* Name & Description */}
      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h2>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>
      </div>

      {/* Category + Difficulty */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
          {technology.category}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center gap-2">
        <FaStar className="text-yellow-400" />

        <span className="font-semibold text-gray-800">
          {technology.rating}
        </span>

        <span className="text-sm text-gray-400">
          / 5.0
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white shadow-md hover:shadow-lg active:scale-[0.98]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;

