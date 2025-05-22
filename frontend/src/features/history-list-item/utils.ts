import type { ListItem } from '@/entities/list/types';
import { formatDateShort } from '@/shared/utils/format-date';
import { groupByDate } from '@/shared/utils/group-by-date';
import { getCurrencySymbol } from '@/shared/utils/local-storage';

const isToday = (date: Date | null) => {
  if (!date) return false;
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
};

export const filterActiveItems = (items: ListItem[]) =>
  normalizeListItems(items).filter((item) => item.boughtAt === null && item.deletedAt === null);

export const filterActiveOrTodayItems = (items: ListItem[]) =>
  normalizeListItems(items).filter(
    (item) =>
      (item.boughtAt === null && item.deletedAt === null) ||
      isToday(item.boughtAt) ||
      isToday(item.deletedAt),
  );

export const normalizeListItems = (items: ListItem[]) =>
  items.map((item) => ({
    ...item,
    boughtAt: item.boughtAt ? new Date(item.boughtAt) : null,
    deletedAt: item.deletedAt ? new Date(item.deletedAt) : null,
    addedAt: item.addedAt ? new Date(item.addedAt) : null,
  }));

export const filterHistoryItems = (items: ListItem[]) =>
  normalizeListItems(items).filter((item) => item.boughtAt !== null || item.deletedAt !== null);

const NO_DATE_LABEL = 'No Date';

export const groupHistoryItems = (items: ListItem[], currency: string) =>
  groupByDate(items, (item) =>
    item.boughtAt
      ? formatDateShort(item.boughtAt)
      : item.deletedAt
        ? formatDateShort(item.deletedAt)
        : NO_DATE_LABEL,
  ).map((group) => ({
    ...group,
    rightContent: `${getCurrencySymbol(currency)} ${group.items.reduce((acc, item) => acc + item.estimatedPrice, 0)}`,
  }));
