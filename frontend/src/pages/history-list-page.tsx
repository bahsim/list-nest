import React, { useState } from 'react';
import { HistoryListWidget } from '@/widgets/history-list-widget/history-list-widget';
import { ListExpansionProvider } from '@/shared/hooks/list-expansion-context';
import { useHistoryDateFilterState } from '@/features/history-list/hooks/use-history-date-filter-state';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { formatDateShort } from '@/shared/utils/format-date';
import { groupByDate } from '@/shared/utils/group-by-date';
import { mockItems } from '@/features/history-list/utils/mock-data';
import { ViewItemModal } from '@/features/history-list/components/view-item-modal';
import type { ListItem } from '@/entities/list/types';

const initialItems: ListItem[] = mockItems;

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

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const handleViewItem = (item: ListItem) => {
    setSelectedItem(item);
    setViewModalOpen(true);
  };

  const [dateModalOpen, setDateModalOpen] = useState(false);
  const handleOpenDateModal = () => setDateModalOpen(true);
  const handleCloseDateModal = () => setDateModalOpen(false);

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
        onViewItem={handleViewItem}
        dateModalOpen={dateModalOpen}
        onOpenDateModal={handleOpenDateModal}
        onCloseDateModal={handleCloseDateModal}
      />
      {viewModalOpen && (
        <ViewItemModal
          item={selectedItem}
          onClose={() => {
            setViewModalOpen(false);
            setSelectedItem(null);
          }}
        />
      )}
    </ListExpansionProvider>
  );
};
