import React from 'react';
import { EmptyState } from '@ui-kit/components/atomic/empty-state/empty-state';
import { EMPTY_STATE_CONFIG } from './empty-state-config';
import { CategoryFilterChips } from '@/shared/ui/list/category-filter-chips';
import type { HistoryListWidgetProps } from './types';
import { BaseList } from '@/entities/list/base-list/base-list';
import { HistoryListItemCard } from '@/features/history-list-item/history-list-item-card';
import { useListExpansion } from '@/shared/hooks/list-expansion-context';

export const HistoryListWidget: React.FC<HistoryListWidgetProps> = ({
  items,
  uniqueCategories,
  selectedCategories,
  onToggleCategory,
  itemsGroupedByDate,
}) => {
  const { expandedItem, handleExpandItem } = useListExpansion();
  const mappedExpandedItem = expandedItem ? { group: expandedItem.group, id: expandedItem.itemId } : null;
  return (
    <>
      {items.length > 0 && uniqueCategories.length > 1 && (
        <CategoryFilterChips
          categories={uniqueCategories}
          selectedCategories={selectedCategories}
          onToggleCategory={onToggleCategory}
        />
      )}
      {items.length === 0 ? (
        <EmptyState
          title={EMPTY_STATE_CONFIG.title}
          description={EMPTY_STATE_CONFIG.description}
          buttonLabel={EMPTY_STATE_CONFIG.buttonLabel}
          onButtonClick={() => {}}
          imageAlt={EMPTY_STATE_CONFIG.imageAlt}
        />
      ) : (
        <BaseList
          grouppedItems={itemsGroupedByDate}
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
