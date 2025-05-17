import type { ListItem } from '@/entities/list/types';

export interface HistoryListWidgetProps {
  items: ListItem[];
  uniqueCategories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  itemsGroupedByDate: { label: string; items: ListItem[] }[];
} 