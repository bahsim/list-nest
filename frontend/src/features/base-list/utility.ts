import type { MainListItem } from '@ui-kit/components/types';

/**
 * Checks if the given item (or itemId) is expanded for the specified group.
 */
export function isItemExpanded(
  expandedItem: { group: string; itemId: string } | null,
  group: string,
  itemOrId: MainListItem | string
): boolean {
  const itemId = typeof itemOrId === 'string' ? itemOrId : itemOrId.id;
  return !!expandedItem && expandedItem.group === group && expandedItem.itemId === itemId;
} 