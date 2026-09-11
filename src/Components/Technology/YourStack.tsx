
import { FaTimes, FaTrash } from "react-icons/fa";
import type { ITechnology } from "../Types/Type";

interface YourStackProps {
  stack: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} Technology{" "}
            {stack.length === 1 ? "Selected" : "Selected"}
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="flex items-center gap-1 text-sm font-medium text-red-500 transition-colors hover:text-red-700"
          >
            <FaTrash className="text-xs" />
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="flex min-h-52 flex-col items-center justify-center text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl">
            🧩
          </div>

          <h3 className="font-semibold text-gray-700">
            Your stack is empty
          </h3>

          <p className="mt-1 max-w-60 text-sm text-gray-400">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        /* Selected Items */
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-2 shadow-sm">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="mt-0.5 text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-red-100 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                <FaTimes className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default YourStack;

