/**
 * MainListItem interface for a shopping list item.
 */
export interface MainListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  estimatedPrice: number;
  currency: string;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
  addedBy: string;
  addedAt: Date;
  boughtAt?: Date;
  notes?: string;
}

/**
 * Props for CategoryFilterChips.
 */
export interface CategoryFilterChipsProps {
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  getCategoryValue: (label: string) => string;
}

/**
 * Props for AddItemFab.
 */
export interface AddItemFabProps {
  onClick: () => void;
}

/**
 * Input type for adding or editing a shopping list item.
 */
export interface AddEditItemInput {
  id?: string;
  name: string;
  quantity: number;
  unit: string;
  estimatedPrice?: number;
  currency?: string;
  category: string;
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
  notes?: string;
}

/**
 * AI suggestion for a shopping list item.
 */
export interface AISuggestion {
  id: string;
  name: string;
  quantity: number;
  estimatedPrice: number;
  category: string;
} 