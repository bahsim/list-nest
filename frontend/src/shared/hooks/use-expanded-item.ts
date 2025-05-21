import { useState } from 'react';

export function useExpandedItem<TId = string, TGroup = string>() {
  const [expandedItem, setExpandedItem] = useState<{ group: TGroup; itemId: TId } | null>(null);

  const handleExpandItem = (group: TGroup, itemId: TId) => {
    setExpandedItem((prev) =>
      prev && prev.group === group && prev.itemId === itemId ? null : { group, itemId },
    );
  };

  const mappedExpandedItem = expandedItem
    ? { group: expandedItem.group, id: expandedItem.itemId }
    : null;

  return {
    expandedItem: mappedExpandedItem,
    handleExpandItem,
  };
}
