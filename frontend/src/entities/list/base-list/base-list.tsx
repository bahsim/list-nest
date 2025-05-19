import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { GroupHeader } from '@/shared/ui/list/group-header';

/**
 * Props for BaseList.
 */
export interface BaseListProps<T> {
  /**
   * Groupped items.
   */
  grouppedItems: {
    label: string;
    items: T[];
    rightContent?: React.ReactNode;
  }[];
  /**
   * Render function for each item.
   */
  renderItem: (item: T, groupLabel: string) => React.ReactNode;
}

/**
 * A generic, dumb list for use in features. Handles layout, no business logic.
 */
export function BaseList<T extends { id?: string }>({
  grouppedItems,
  renderItem,
}: BaseListProps<T>) {
  return (
    <>
      {grouppedItems.map((group) => (
        <React.Fragment key={group.label}>
          {group.items.length > 0 && (
            <React.Fragment key={group.label}>
              <GroupHeader label={group.label} rightContent={group.rightContent} />
              <List sx={{ width: '100%', maxWidth: 600, px: 1 }} disablePadding>
                {group.items.map((item, i) => (
                  <ListItem
                    key={item.id ?? i}
                    disableGutters
                    disablePadding
                    sx={{ display: 'block' }}
                  >
                    {renderItem(item, group.label)}
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
