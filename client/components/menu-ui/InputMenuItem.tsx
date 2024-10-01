import React, { useEffect, useState } from "react";
import { Input } from "../../components/ui/input"; // Adjust this import as needed
import menuItemsData from "./menuItems.json"; // Adjust the path as needed
import { ButtonDemo } from "./ButtonDemo";

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
}

interface InputMenuItemsProps {
  searchTerm: string; // Prop for search term
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>; // Prop for setting search term
}

export function InputMenuItems({
  searchTerm,
  setSearchTerm,
}: InputMenuItemsProps) {
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const filtered = menuItemsData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]); // Clear results if less than 3 characters
    }
  }, [searchTerm]);

  return (
    <div className="w-full flex flex-col">
      {/* Main content above the input */}
      <div className="mt-4 w-3/5 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {filteredItems.length > 0 &&
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="max-h-40 w-full rounded-lg border bg-white shadow-md flex flex-col"
              >
                <div className="flex-grow overflow-y-auto p-2 pr-2 scrollbar">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h4>
                  {item.prices && item.prices.length > 0 ? (
                    item.prices.map((priceOption, index) => (
                      <div key={index} className="text-gray-700 mb-1">
                        {priceOption.size}: {priceOption.price}
                      </div>
                    ))
                  ) : item.price ? (
                    <div className="text-gray-700 mb-1">
                      Price: {item.price}
                    </div>
                  ) : null}
                  <p className="text-gray-600 leading-7 mb-3">
                    {item.description}
                  </p>
                </div>
                <div className="p-2">
                  <ButtonDemo />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Input Box without extra space */}
      <div className="w-full max-w-md mx-auto mt-4 shadow-2xl p-4">
        <Input
          className="w-full pl-4 pr-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg border border-gray-300 dark:border-gray-600
              hover:bg-gray-200 dark:hover:bg-gray-700 
               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
              transition-all duration-300 ease-in-out 
              placeholder-gray-400 dark:placeholder-gray-500"
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
