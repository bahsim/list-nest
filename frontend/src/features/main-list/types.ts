import type { ShoppingListItem } from '@ui-kit/components/types';
import type { SxProps, Theme } from '@mui/material/styles';

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
 * Props for ShoppingListGroup.
 */
export interface ShoppingListGroupProps {
  label: string;
  items: ShoppingListItem[];
  groupSum: number;
  onEdit: (item: ShoppingListItem) => void;
  onDelete: (item: ShoppingListItem) => void;
  onToggleBought: (item: ShoppingListItem) => void;
  onToggleCurrent: (item: ShoppingListItem) => void;
  onRestore?: (item: ShoppingListItem) => void;
  sx?: SxProps<Theme>;
  expandedItemId: string | null;
  onExpandItem: (id: string) => void;
  onAddNote: (item: ShoppingListItem) => void;
  onSaveNote: (id: string, note: string) => void;
}

/**
 * Props for AddItemFab.
 */
export interface AddItemFabProps {
  onClick: () => void;
} 