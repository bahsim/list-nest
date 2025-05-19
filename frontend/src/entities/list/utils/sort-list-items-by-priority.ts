import type { ListItem } from '../types';
import { isBought, isDeleted } from '@/shared/utils/list-utils';

export const getPriority = (item: ListItem): number => {
  if (!isBought(item) && !isDeleted(item)) return 1;
  if (isBought(item) && !isDeleted(item)) return 2;
  if (!isBought(item) && isDeleted(item)) return 3;
  return 4;
};

export const sortListItemsByPriority = (items: ListItem[]): ListItem[] =>
  [...items].sort((a, b) => getPriority(a) - getPriority(b));
