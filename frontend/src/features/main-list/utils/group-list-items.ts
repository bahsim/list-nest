import { sortListItemsByPriority } from '@/entities/list/utils/sort-list-items-by-priority';
import { getGroupSum } from '@/shared/utils/list-utils';
import { getCurrencySymbol } from '@/shared/utils/local-storage';
import type { ListItem } from '@/entities/list/types';
import { TFunction } from 'i18next';

interface GetMainListGroupsParams {
  currentItems: ListItem[];
  items: ListItem[];
  currency: string;
  t: TFunction;
}

/**
 * Returns grouped and summarized main list items for widget rendering.
 * @param filteredCurrentItems - current items
 * @param filteredItems - all filtered items
 */
export const getMainListGroups = ({ currentItems, items, currency, t }: GetMainListGroupsParams) => {
  const symbol = getCurrencySymbol(currency);
  return [
    {
      label: t('mainListGroups.current'),
      items: sortListItemsByPriority(currentItems),
      rightContent: `${symbol} ${getGroupSum(currentItems, (item) => item.estimatedPrice)}`,
    },
    {
      label: t('mainListGroups.all'),
      items: sortListItemsByPriority(items),
      rightContent: `${symbol} ${getGroupSum(items, (item) => item.estimatedPrice)}`,
    },
  ];
};
