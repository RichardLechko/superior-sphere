import React from "react";
import { CarouselDemo } from "./MenuCarousel"; // Adjust the import path as necessary

interface PriceOption {
  size: string;
  price: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  price?: string; // Optional single price property
  prices?: PriceOption[]; // Optional array of price options
  image?: string; // Optional image property
}

interface DisplayItemsProps {
  items: Item[];
  visibleItems: number;
  loadMoreItems: () => void;
}

const DisplayItems: React.FC<DisplayItemsProps> = ({
  items,
  visibleItems,
  loadMoreItems,
}) => {
  // Check if items are filtered
  const hasItems = items.length > 0;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4">
        {items.slice(0, visibleItems).map((item) => {
          console.log("Item Details:", item);

          return (
            <div
              key={item.id}
              className={`w-full md:w-5/6 p-3 sm:p-4 rounded-lg shadow-lg bg-white transition-transform transform flex flex-col justify-between h-full ${
                hasItems ? "" : "opacity-50"
              }`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-24 sm:h-32 object-cover rounded-lg mb-2"
                />
              )}
              <div className="flex-grow">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-gray-500">{item.description}</p>
                {item.prices ? (
                  <CarouselDemo prices={item.prices} />
                ) : item.price ? (
                  <p className="text-lg font-semibold text-black">
                    {item.price}
                  </p>
                ) : (
                  <p className="text-red-500">Price not available</p>
                )}
              </div>

              <button className="w-full mt-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
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
            className="my-4 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayItems;
