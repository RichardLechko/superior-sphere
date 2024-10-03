import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { PriceInputProps } from "@/types";

const priceOptions = ["Lowest to Highest", "Highest to Lowest"];

const PriceInput: React.FC<PriceInputProps> = ({
  selectedPriceRange,
  handlePriceChange,
}) => {
  return (
    <Select onValueChange={handlePriceChange}>
      <SelectTrigger className="w-[180px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600">
        <SelectValue placeholder="Sort by Price">
          {selectedPriceRange ? selectedPriceRange : "Sort by Price"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800">
        <SelectGroup>
          <SelectLabel className="text-gray-800 dark:text-gray-200">
            Price
          </SelectLabel>
          {priceOptions.map((option) => (
            <SelectItem
              key={option}
              value={option}
              className="text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceInput;
