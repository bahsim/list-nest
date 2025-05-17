import type { ExpandedItem } from '@/entities/list/types/expanded-item';
/**
 * Checks if the given item (or itemId) is expanded for the specified group.
 */

interface IsItemExpandedProps {
  expandedItem: ExpandedItem | null;
  group?: string;
  itemId: string;
}

export function isItemExpanded({
  expandedItem,
  group = 'non-group',
  itemId,
}: IsItemExpandedProps): boolean {
  return !!expandedItem && expandedItem.group === group && expandedItem.id === itemId;
}
