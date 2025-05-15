import * as React from 'react';
import { BaseListItemCard } from '../../widgets/base-list-item-card';
import type { HistoryItem } from '../../entities/history-list/types';

export interface HistoryListItemCardProps {
  item: HistoryItem;
  onRestore: () => void;
}

export const HistoryListItemCard: React.FC<HistoryListItemCardProps> = ({ item, onRestore }) => (
  <BaseListItemCard
    title={item.name}
    secondaryText={item.date}
    checked={item.isRestored}
    highlighted={false}
    disabled={item.isDeleted}
    onToggle={onRestore}
    // Add custom icons or swipe logic if needed
    isExpanded={false}
    onExpand={() => {}}
  />
); 