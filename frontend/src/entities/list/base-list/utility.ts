/**
 * Checks if the given item (or itemId) is expanded for the specified group.
 */
export function isItemExpanded(
  expandedItem: { group: string; itemId: string } | null,
  group: string,
  itemId: string,
): boolean {
  return !!expandedItem && expandedItem.group === group && expandedItem.itemId === itemId;
}
