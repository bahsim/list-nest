import * as React from 'react';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { HistoryItemExpanded } from './history-item-expanded';
import { BaseListItemCardContainer } from '@/entities/list/base-list/base-list-item-card-container';
import { isBought, isDeleted } from '@/shared/utils/list-utils';
import { Category } from '@/shared/types/category';
import { getCategoryColorByName } from '@/shared/utils/category-color';

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
  onViewItem?: (item: ListItem) => void;
  currency: string;
  categories: Category[];
}

export const HistoryListItemCard: React.FC<HistoryListItemCardProps> = ({
  item,
  expandedItem,
  onExpand,
  onViewItem,
  currency,
  categories,
}) => {
  return (
    <BaseListItemCardContainer
      item={item}
      expandedItem={expandedItem}
      onExpand={onExpand}
      checked={isBought(item)}
      highlighted={false}
      canceled={isDeleted(item)}
      completed={false}
      secondaryText={`${item.quantity} ${item.unit}`}
      renderExpandedContent={
        <HistoryItemExpanded
          item={item}
          expandedItem={expandedItem}
          onViewItem={onViewItem}
          currency={currency}
        />
      }
      borderColor={getCategoryColorByName(categories, item.category)}
    />
  );
};
