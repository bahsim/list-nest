import React, { useState } from 'react';
import { EmptyState } from '@ui-kit/components/atomic/empty-state/empty-state';
import { EMPTY_STATE_CONFIG } from './empty-state-config';
import { CategoryFilterChips } from '@/shared/ui/list/category-filter-chips';
import type { HistoryListWidgetProps } from './types';
import { BaseList } from '@/entities/list/base-list/base-list';
import { HistoryListItemCard } from '@/features/history-list-item/history-list-item-card';
import { DateRangeModal, DateRangeButton } from '@/features/history-list/components';
import { useNavigate } from 'react-router-dom';
import { goToMainPage } from '@/shared/utils/navigation';
import { useExpandedItem } from '@/shared/hooks/use-expanded-item';
import { ViewItemModal } from '@/features/history-list/components/view-item-modal';
import type { ListItem } from '@/entities/list/types';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { useHistoryDateFilterState } from '@/features/history-list/hooks/use-history-date-filter-state';
import { useModal } from '@/shared/hooks/use-modal';
import { groupHistoryItems } from '@/features/history-list-item/utils';

export const HistoryListWidget: React.FC<HistoryListWidgetProps> = ({ items, currency, categories }) => {
  const navigate = useNavigate();

  // List expansion
  const { expandedItem, handleExpandItem } = useExpandedItem();

  // Date filter modal
  const {
    open: dateModalOpen,
    openModal: handleOpenDateModal,
    closeModal: handleCloseDateModal,
  } = useModal();

  // Date filter logic
  const {
    selectedDateRange,
    selectedDatePreset,
    handleDateRangeChange,
    getRangeLabel,
    filteredItemsByDate,
  } = useHistoryDateFilterState(items);

  // Category filter logic
  const { selectedCategories, toggleCategory, filteredItemsByCategory, uniqueCategories } =
    useCategoryFilter(categories, filteredItemsByDate, (item) => item.category);

  // Grouping logic
  const itemsGroupedByDate = React.useMemo(
    () => groupHistoryItems(filteredItemsByCategory, currency),
    [filteredItemsByCategory, currency],
  );

  // Modal state and handlers
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  const handleViewItem = (item: ListItem) => {
    setSelectedItem(item);
    setViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setViewModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      {items.length > 0 && (
        <DateRangeButton label={getRangeLabel()} onClick={handleOpenDateModal} />
      )}
      <DateRangeModal
        open={dateModalOpen}
        onClose={handleCloseDateModal}
        selectedRange={selectedDateRange}
        selectedPreset={selectedDatePreset}
        onChange={handleDateRangeChange}
      />
      {uniqueCategories.length > 0 && (
        <CategoryFilterChips
          categories={uniqueCategories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
        />
      )}
      {items.length === 0 ? (
        <EmptyState
          title={EMPTY_STATE_CONFIG.title}
          description={EMPTY_STATE_CONFIG.description}
          buttonLabel={EMPTY_STATE_CONFIG.buttonLabel}
          onButtonClick={() => goToMainPage(navigate)}
          imageAlt={EMPTY_STATE_CONFIG.imageAlt}
        />
      ) : (
        <BaseList
          grouppedItems={itemsGroupedByDate}
          renderItem={(item) => (
            <HistoryListItemCard
              item={item}
              currency={currency}
              expandedItem={expandedItem}
              onExpand={handleExpandItem}
              onViewItem={handleViewItem}
              categories={categories}
            />
          )}
        />
      )}
      {viewModalOpen && (
        <ViewItemModal item={selectedItem} onClose={handleCloseViewModal} currency={currency} />
      )}
    </>
  );
};
