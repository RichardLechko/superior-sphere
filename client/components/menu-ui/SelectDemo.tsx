import * as React from "react";
import SelectInput from "./SelectInput";
import FilterTags from "./FilterTags";
import DisplayItems from "./DisplayItems";
import PriceInput from "./PriceInput";
import MENU_ITEMS from "./menuItems.json";

export function SelectDemo() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<
    string | null
  >(null);
  const [visibleItems, setVisibleItems] = React.useState(10);

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
    filteredItems.sort(
      (a, b) =>
        Number(a.price.replace("$", "")) - Number(b.price.replace("$", ""))
    );
  } else if (selectedPriceRange === "Highest to Lowest") {
    filteredItems.sort(
      (a, b) =>
        Number(b.price.replace("$", "")) - Number(a.price.replace("$", ""))
    );
  }

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 10);
  };

  return (
    <div className="pt-24 px-8">
      <SelectInput
        selectedCategory={selectedCategory}
        handleSelectChange={handleSelectChange}
      />
      <PriceInput
        selectedPriceRange={selectedPriceRange}
        handlePriceChange={handlePriceChange}
      />
      <FilterTags
        selectedCategory={selectedCategory}
        selectedPriceRange={selectedPriceRange}
        removeFilter={removeFilter}
        removePriceFilter={removePriceFilter}
      />

      <DisplayItems
        items={filteredItems}
        visibleItems={visibleItems}
        loadMoreItems={loadMoreItems}
      />
    </div>
  );
}
