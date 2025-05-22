import React from 'react';
import { HistoryListWidget } from '@/widgets/history-list-widget/history-list-widget';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import type { ListItem } from '@/entities/list/types';
import { LIST_ITEMS_KEY, CURRENCY_KEY, CATEGORIES_KEY } from '@/shared/constants/storage-keys';
import { normalizeListItems, filterHistoryItems } from '@/features/history-list-item/utils';
import { Category } from '@/shared/types/category';

export const HistoryListPage: React.FC = () => {
  const [rawListItems] = usePersistentState<ListItem[]>(LIST_ITEMS_KEY, []);
  const [currency] = usePersistentState(CURRENCY_KEY, 'USD');
  const [categories] = usePersistentState<Category[]>(CATEGORIES_KEY, []);

  const listItems = normalizeListItems(rawListItems);
  const filteredListItems = filterHistoryItems(listItems);

  return (
    <HistoryListWidget items={filteredListItems} currency={currency} categories={categories} />
  );
};
