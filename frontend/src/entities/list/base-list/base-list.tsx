import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * Props for BaseList.
 */
export interface BaseListProps<T> {
  items: T[];
  /**
   * Render function for each item.
   */
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * Optional style overrides.
   */
  sx?: SxProps<Theme>;
}

/**
 * A generic, dumb list for use in features. Handles layout, no business logic.
 */
export function BaseList<T>({ items, renderItem, sx }: BaseListProps<T>) {
  return (
    <List sx={sx} disablePadding>
      {items.map((item, i) => (
        <ListItem key={i} disableGutters disablePadding sx={{ display: 'block' }}>
          {renderItem(item, i)}
        </ListItem>
      ))}
    </List>
  );
} 