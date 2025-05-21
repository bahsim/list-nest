import { sortListItemsByPriority } from '@/entities/list/utils/sort-list-items-by-priority';
import { getGroupSum } from '@/shared/utils/list-utils';
import { getCurrencySymbol } from '@/shared/utils/local-storage';
import type { ListItem } from '@/entities/list/types';

interface GetMainListGroupsParams {
  currentItems: ListItem[];
  items: ListItem[];
  currency: string;
}

/**
 * Returns grouped and summarized main list items for widget rendering.
 * @param filteredCurrentItems - current items
 * @param filteredItems - all filtered items
 */
export const getMainListGroups = ({ currentItems, items, currency }: GetMainListGroupsParams) => {
  const symbol = getCurrencySymbol(currency);
  return [
    {
      label: 'current',
      items: sortListItemsByPriority(currentItems),
      rightContent: `${symbol} ${getGroupSum(currentItems, (item) => item.estimatedPrice)}`,
    },
    {
      label: 'all',
      items: sortListItemsByPriority(items),
      rightContent: `${symbol} ${getGroupSum(items, (item) => item.estimatedPrice)}`,
    },
  ];
};
