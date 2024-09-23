import React from "react";

interface Item {
  id: number;
  name: string;
  price: string;
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
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {items.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="w-11/12 md:w-5/6 p-4 rounded-lg shadow-lg bg-white transition-transform transform"
          >
            <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
            <p className="text-lg text-gray-600">{item.price}</p>
            <p className="text-gray-500">Description for {item.name}.</p>
            <button className="mt-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {items.length > visibleItems && (
        <div className="flex m-auto justify-center">
          <button
            onClick={loadMoreItems}
            className="my-4 px-4 py-4 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayItems;
