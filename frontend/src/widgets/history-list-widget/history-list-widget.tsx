import React, { useState } from 'react';
import { EmptyState } from '@ui-kit/components/atomic/empty-state/empty-state';
import { EMPTY_STATE_CONFIG } from './empty-state-config';
import { CategoryFilterChips } from '@/shared/ui/list/category-filter-chips';
import type { HistoryListWidgetProps } from './types';
import { BaseList } from '@/entities/list/base-list/base-list';
import { HistoryListItemCard } from '@/features/history-list-item/history-list-item-card';
import { useListExpansion } from '@/shared/hooks/list-expansion-context';
import { DateRangeModal, DateRangeButton } from '@/features/history-list/components';

export const HistoryListWidget: React.FC<HistoryListWidgetProps> = ({
  listData,
  categoryFilter,
  dateFilter,
}) => {
  const { expandedItem, handleExpandItem } = useListExpansion();
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const mappedExpandedItem = expandedItem
    ? { group: expandedItem.group, id: expandedItem.itemId }
    : null;

  return (
    <>
      {listData.items.length > 0 && (
        <DateRangeButton
          label={dateFilter.getRangeLabel()}
          onClick={() => setDateModalOpen(true)}
        />
      )}
      <DateRangeModal
        open={dateModalOpen}
        onClose={() => setDateModalOpen(false)}
        selectedRange={dateFilter.selectedDateRange}
        selectedPreset={dateFilter.selectedDatePreset}
        onChange={dateFilter.handleDateRangeChange}
      />
      {categoryFilter.uniqueCategories.length > 1 && (
        <CategoryFilterChips
          categories={categoryFilter.uniqueCategories}
          selectedCategories={categoryFilter.selectedCategories}
          onToggleCategory={categoryFilter.onToggleCategory}
        />
      )}
      {listData.items.length === 0 ? (
        <EmptyState
          title={EMPTY_STATE_CONFIG.title}
          description={EMPTY_STATE_CONFIG.description}
          buttonLabel={EMPTY_STATE_CONFIG.buttonLabel}
          onButtonClick={() => {}}
          imageAlt={EMPTY_STATE_CONFIG.imageAlt}
        />
      ) : (
        <BaseList
          grouppedItems={listData.filteredGroups}
          renderItem={(item) => (
            <HistoryListItemCard
              item={item}
              expandedItem={mappedExpandedItem}
              onExpand={handleExpandItem}
            />
          )}
        />
      )}
    </>
  );
};
