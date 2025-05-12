import * as React from 'react';
import { BaseList } from '../base-list/base-list';
import { HistoryListItemCard } from './history-list-item-card';
import type { HistoryItem } from './types';

export interface HistoryListProps {
  items: HistoryItem[];
  onRestore: (item: HistoryItem) => void;
}

export const HistoryList: React.FC<HistoryListProps> = ({ items, onRestore }) => {
  // Example: sort by date descending
  const sortedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <BaseList
      items={sortedItems}
      renderItem={item => (
        <HistoryListItemCard
          item={item}
          onRestore={() => onRestore(item)}
        />
      )}
    />
  );
}; 