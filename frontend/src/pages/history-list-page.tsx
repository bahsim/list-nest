import React from 'react';
import { HistoryListWidget } from '@/widgets/history-list-widget/history-list-widget';
import { ListExpansionProvider } from '@/shared/hooks/list-expansion-context';
import { useHistoryDateFilterState } from '@/features/history-list/hooks/use-history-date-filter-state';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { formatDateShort } from '@/shared/utils/format-date';
import { groupByDate } from '@/shared/utils/group-by-date';
import { mockItems } from '@/features/history-list/utils/mock-data';

const initialItems = mockItems;

export const HistoryListPage: React.FC = () => {
  const {
    selectedDateRange,
    selectedDatePreset,
    handleDateRangeChange,
    getRangeLabel,
    filteredItemsByDate,
  } = useHistoryDateFilterState(initialItems);

  const { selectedCategories, handleToggleCategory, filteredItemsByCategory, uniqueCategories } =
    useCategoryFilter(filteredItemsByDate, (item) => item.category);

  const itemsGroupedByDate = groupByDate(filteredItemsByCategory, (item) =>
    item.boughtAt
      ? formatDateShort(item.boughtAt)
      : item.deletedAt
        ? formatDateShort(item.deletedAt)
        : 'No Date',
  );

  return (
    <ListExpansionProvider>
      <HistoryListWidget
        listData={{
          items: initialItems,
          filteredGroups: itemsGroupedByDate,
        }}
        categoryFilter={{
          uniqueCategories,
          selectedCategories,
          onToggleCategory: handleToggleCategory,
        }}
        dateFilter={{
          selectedDateRange,
          handleDateRangeChange,
          selectedDatePreset,
          getRangeLabel,
        }}
      />
    </ListExpansionProvider>
  );
};
