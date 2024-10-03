export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export interface PriceOption {
  size: string;
  price: string;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  price?: string;
  prices?: PriceOption[];
  image?: string;
}

export interface DisplayItemsProps {
  items: Item[];
  visibleItems: number;
  loadMoreItems: () => void;
}

export interface FilterTagsProps {
  selectedCategory: string | null;
  selectedPriceRange: string | null;
  removeFilter: () => void;
  removePriceFilter: () => void;
}

export interface InputMenuItemsProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarouselDemoProps {
  prices: PriceOption[];
}

export interface PriceInputProps {
  selectedPriceRange: string | null;
  handlePriceChange: (priceRange: string | null) => void;
}

export interface SelectInputProps {
  selectedCategory: string | null;
  handleSelectChange: (value: string) => void;
}
