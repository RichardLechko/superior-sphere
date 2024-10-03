import React from "react";
import { CarouselDemo } from "./MenuCarousel";
import type { DisplayItemsProps } from "@/types";

const DisplayItems: React.FC<DisplayItemsProps> = ({
  items,
  visibleItems,
  loadMoreItems,
}) => {
  const hasItems = items.length > 0;

  return (
    <div className="bg-white dark:bg-gray-900">
      {" "}
      {/* Main container background */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
        {items.slice(0, visibleItems).map((item) => {
          return (
            <div
              key={item.id}
              className={`w-full md:w-5/6 p-3 sm:p-4 rounded-lg shadow-lg transition-transform transform flex flex-col justify-between h-full ${
                hasItems ? "bg-white dark:bg-gray-800" : "opacity-50"
              }`} // Card background
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2"
                />
              )}
              <div className="flex-grow">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-300">
                  {item.description}
                </p>
                {item.prices ? (
                  <CarouselDemo prices={item.prices} />
                ) : item.price ? (
                  <p className="text-lg font-semibold text-black dark:text-gray-200">
                    {item.price}
                  </p>
                ) : (
                  <p className="text-red-500 dark:text-red-400">
                    Price not available
                  </p>
                )}
              </div>

              <button className="w-full mt-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
                Order
              </button>
            </div>
          );
        })}
      </div>
      {items.length > visibleItems && (
        <div className="flex justify-center">
          <button
            onClick={loadMoreItems}
            className="my-4 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayItems;
