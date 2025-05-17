import type { ListItem } from '../types';

export const getPriority = (item: ListItem): number => {
  if (!item.isBought && !item.isDeleted) return 1;
  if (item.isBought && !item.isDeleted) return 2;
  if (!item.isBought && item.isDeleted) return 3;
  return 4;
};

export const sortListItemsByPriority = (items: ListItem[]): ListItem[] =>
  [...items].sort((a, b) => getPriority(a) - getPriority(b));
