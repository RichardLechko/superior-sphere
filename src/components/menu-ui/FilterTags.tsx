import React from "react";

interface FilterTagsProps {
  selectedCategory: string | null;
  selectedPriceRange: string | null;
  removeFilter: () => void;
  removePriceFilter: () => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({
  selectedCategory,
  selectedPriceRange,
  removeFilter,
  removePriceFilter,
}) => {
  return (
    <div className="flex flex-wrap mt-2">
      {selectedCategory && selectedCategory !== "All" && (
        <div className="flex items-center mr-2 mb-2 bg-gray-200 dark:bg-gray-600 rounded px-2 py-1">
          <span className="text-gray-800 dark:text-gray-200">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </span>
          <button
            onClick={removeFilter}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            X
          </button>
        </div>
      )}
      {selectedPriceRange && (
        <div className="flex items-center mr-2 mb-2 bg-gray-200 dark:bg-gray-600 rounded px-2 py-1">
          <span className="text-gray-800 dark:text-gray-200">
            {selectedPriceRange}
          </span>
          <button
            onClick={removePriceFilter} // Ensure this calls the correct function
            className="ml-2 text-red-500 hover:text-red-700"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterTags;
