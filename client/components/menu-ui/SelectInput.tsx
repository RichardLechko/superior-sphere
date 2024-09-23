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

const tags = ["All", "Meat", "Poultry", "Specialties"]; // Categories array

interface SelectInputProps {
  selectedCategory: string | null;
  handleSelectChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  selectedCategory,
  handleSelectChange,
}) => {
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600">
        <SelectValue placeholder="Filter by Category">
          {selectedCategory ? selectedCategory : "Filter by Category"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800">
        <SelectGroup>
          <SelectLabel className="text-gray-800 dark:text-gray-200">
            Categories
          </SelectLabel>
          {tags.map((tag) => (
            <SelectItem
              key={tag}
              value={tag}
              className="text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {tag}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
