import * as React from 'react';
import type { MainListItem } from '@ui-kit/components/types';
import type { SxProps, Theme } from '@mui/material/styles';
import { BaseList } from '../base-list/base-list';
import { MainListItemCard } from './components/main-list-item-card';

/**
 * MainList component for displaying a list of shopping items using BaseList.
 * Uses context for actions and expanded item.
 * @param items - Array of shopping list items.
 * @param sx - Style overrides.
 * @param group - Group of the shopping list.
 */
export interface MainListProps {
  items: MainListItem[];
  sx?: SxProps<Theme>;
  group: 'current' | 'all';
}

export const MainList: React.FC<MainListProps> = ({ items, sx, group }) => {
  const getPriority = (item: MainListItem): number => {
    if (!item.isBought && !item.isDeleted) return 1; // Normal
    if (item.isBought && !item.isDeleted) return 2; // Bought
    if (!item.isBought && item.isDeleted) return 3; // Deleted
    return 4; // fallback for any other case
  };
  const sortedItems = [...items].sort((a, b) => getPriority(a) - getPriority(b));

  return (
    <BaseList
      items={sortedItems}
      renderItem={(item) => <MainListItemCard item={item} group={group} />}
      sx={sx}
    />
  );
};
