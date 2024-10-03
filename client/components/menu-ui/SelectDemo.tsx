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

  let filteredItems = [...MENU_ITEMS];

  if (selectedCategory) {
    filteredItems = filteredItems.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

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

  return (
    <div className="pt-24 px-12">
      <div className="flex justify-center w-full mb-4">
        <InputMenuItems searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="flex flex-col gap-4 mb-4">
        <div className="flex gap-4">
          <SelectInput
            selectedCategory={selectedCategory}
            handleSelectChange={handleSelectChange}
          />
          <PriceInput
            selectedPriceRange={selectedPriceRange}
            handlePriceChange={handlePriceChange}
          />
        </div>

        <FilterTags
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          removeFilter={removeFilter}
          removePriceFilter={removePriceFilter}
        />
      </div>

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
