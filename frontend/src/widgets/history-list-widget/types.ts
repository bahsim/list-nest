import type { ListItem } from '@/entities/list/types';
import type { DateRange } from '@/shared/types/date-range';

export interface HistoryListWidgetProps {
  listData: {
    items: ListItem[];
    filteredGroups: { label: string; items: ListItem[] }[];
  };
  categoryFilter: {
    uniqueCategories: string[];
    selectedCategories: string[];
    onToggleCategory: (category: string) => void;
  };
  dateFilter: {
    selectedDateRange: DateRange<Date>;
    selectedDatePreset: string | null;
    handleDateRangeChange: (range: DateRange<Date>, preset: string | null) => void;
    getRangeLabel: () => string;
  };
  onViewItem: (item: ListItem) => void;
  dateModalOpen: boolean;
  onOpenDateModal: () => void;
  onCloseDateModal: () => void;
} 