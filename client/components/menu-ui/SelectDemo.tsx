import * as React from "react";
import SelectInput from "./SelectInput";
import FilterTags from "./FilterTags";
import DisplayItems from "./DisplayItems";
import PriceInput from "./PriceInput";
import MENU_ITEMS from "./menuItems.json";
import { InputMenuItems } from "./InputMenuItem";

export function SelectDemo() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<
    string | null
  >(null);
  const [visibleItems, setVisibleItems] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // State for dialog

  const handleSelectChange = (value: string) => {
    if (value === "All") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(value);
    }
    setVisibleItems(10);
  };

  const handlePriceChange = (priceRange: string | null) => {
    setSelectedPriceRange(priceRange);
    setVisibleItems(10);
  };

  const removeFilter = () => {
    setSelectedCategory(null);
    setVisibleItems(10);
  };

  const removePriceFilter = () => {
    setSelectedPriceRange(null);
    setVisibleItems(10);
  };

  // Create a copy of the original items for filtering
  let filteredItems = [...MENU_ITEMS];

  // Apply category filter
  if (selectedCategory) {
    filteredItems = filteredItems.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  // Apply price sorting
  if (selectedPriceRange === "Lowest to Highest") {
    filteredItems.sort((a, b) => {
      const priceA = Number(a.price?.replace("$", "") || "0");
      const priceB = Number(b.price?.replace("$", "") || "0");
      return priceA - priceB;
    });
  } else if (selectedPriceRange === "Highest to Lowest") {
    filteredItems.sort((a, b) => {
      const priceA = Number(a.price?.replace("$", "") || "0");
      const priceB = Number(b.price?.replace("$", "") || "0");
      return priceB - priceA;
    });
  }

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 10);
  };

  // Function to open the dialog
  const openDialog = () => {
    console.log("Opening dialog..."); // Debugging log
    setIsDialogOpen(true); // Ensure this is setting the state to true
  };

  // Function to close the dialog
  const closeDialog = () => {
    console.log("Closing dialog..."); // Debugging log
    setIsDialogOpen(false); // Ensure this is setting the state to false
  };

  return (
    <div className="pt-24 px-12">
      <div className="flex items-end mb-4">
        <div className="flex flex-col gap-4">
          <SelectInput
            selectedCategory={selectedCategory}
            handleSelectChange={handleSelectChange}
          />
          <div>
            <PriceInput
              selectedPriceRange={selectedPriceRange}
              handlePriceChange={handlePriceChange}
            />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <InputMenuItems
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>

      <FilterTags
        selectedCategory={selectedCategory}
        selectedPriceRange={selectedPriceRange}
        removeFilter={removeFilter}
        removePriceFilter={removePriceFilter}
      />

      <div className="mt-4">
        <DisplayItems
          items={filteredItems}
          visibleItems={visibleItems}
          loadMoreItems={loadMoreItems}
        />
      </div>
    </div>
  );
}
