import * as React from 'react';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { HistoryItemExpanded } from './history-item-expanded';
import { BaseListItemCardContainer } from '@/entities/list/base-list/base-list-item-card-container';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * Uses context for all actions and expanded item.
 * @param item - The shopping list item.
 * @param group - The group of the shopping list item.
 */
export interface HistoryListItemCardProps {
  item: ListItem;
  expandedItem: ExpandedItem | null;
  onExpand: (group: string, id: string) => void;
}

export const HistoryListItemCard: React.FC<HistoryListItemCardProps> = ({ item, expandedItem, onExpand }) => {
  return (
    <BaseListItemCardContainer
      item={item}
      expandedItem={expandedItem}
      onExpand={onExpand}
      checked={item.isBought}
      highlighted={false}
      canceled={item.isDeleted}
      completed={false}
      secondaryText={`${item.quantity} ${item.unit}`}
      renderExpandedContent={<HistoryItemExpanded item={item} expandedItem={expandedItem} />}
    />
  );
};
