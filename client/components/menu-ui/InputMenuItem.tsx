import React, { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import menuItemsData from "./menuItems.json";
import { ButtonDemo } from "./ButtonDemo";
import type { Item, InputMenuItemsProps } from "@/types";

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
      setFilteredItems([]);
    }
  }, [searchTerm]);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full max-w-md mx-auto my-4 shadow-2xl rounded-full p-4">
        <Input
          className="rounded-full w-full pl-4 pr-10  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600
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

      <div className="mt-4 w-full mx-auto">
        <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 md:grid-cols-3 [@media(max-width:425px)]:grid-cols-1">
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
    </div>
  );
}
